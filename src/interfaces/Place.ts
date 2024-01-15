interface Image {
  url: string
  width: number
  height: number
}

export interface IPlace {
  id: string
  slug: string
  name: string
  markerType: string
  location: {
    latitude: number
    longitude: number
  }
  description?: {
    html: string
    text: string
  }
  gallery: Image[]
}
