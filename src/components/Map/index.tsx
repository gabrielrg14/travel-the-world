import { useRouter } from 'next/router'

import * as S from './styles'
import L from 'leaflet'
import { useMapEvents, MapContainer, TileLayer, Marker } from 'react-leaflet'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

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

const markerIcon = new L.Icon({
  iconUrl: 'img/marker-128.png',
  iconSize: [40, 40],
  iconAnchor: [20, 45],
  popupAnchor: [0, -40]
})

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

        {places?.map(({ id, name, slug, location }) => {
          const { latitude, longitude } = location
          return (
            <Marker
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={name}
              icon={markerIcon}
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
