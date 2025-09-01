import { useRouter } from 'next/router'

import * as S from './styles'
import { IPlaceMap } from 'interfaces'
import L from 'leaflet'
import { useMapEvents, MapContainer, TileLayer, Marker } from 'react-leaflet'

const MapConsumer = () => {
  const map = useMapEvents({
    dragend: () => {
      map.setView(map.getCenter())
    },
    zoomend: () => {
      map.setView(map.getCenter(), map.getZoom())
    }
  })

  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  if (width < 768) {
    map.setMinZoom(2)
    map.setZoom(2)
  }

  return null
}

const getMarkerIcon = (type: string) => {
  return new L.Icon({
    iconUrl: `images/marker/${type}.png`,
    attribution: 'test',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  })
}

type MapProps = {
  places?: IPlaceMap[]
}

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  return (
    <S.MapWrapper>
      <MapContainer
        center={[0, 0]}
        minZoom={3}
        zoom={3}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
        style={{ height: '100%', width: '100%' }}
      >
        <MapConsumer />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {places?.map(({ id, name, slug, markerType, location }) => {
          const { latitude, longitude } = location
          return (
            <Marker
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={name}
              alt={`${name} - ${markerType} marker`}
              icon={getMarkerIcon(markerType)}
              eventHandlers={{
                click: () => {
                  router.push(`/place/${slug}`)
                }
              }}
            />
          )
        })}
      </MapContainer>
    </S.MapWrapper>
  )
}

export default Map
