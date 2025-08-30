interface IGalleryImage {
  url: string
  caption: string
  width: number
  height: number
}

interface IPlace {
  id: string
  slug: string
  name: string
  markerType: string
}

export interface IPlaceMap extends IPlace {
  location: {
    latitude: number
    longitude: number
  }
}

export interface IPlacePage extends IPlace {
  description?: {
    html: string
    text: string
  }
  gallery: IGalleryImage[]
}
