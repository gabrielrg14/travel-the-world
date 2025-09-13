import { IPlaceMap, IPlacePage } from 'interfaces'

export type IPlaceMock = IPlaceMap & IPlacePage

const campinas: IPlaceMock = {
  id: 'cljevusgs15cu0bkfwxhj2sdk',
  name: 'Campinas, São Paulo',
  slug: 'campinas-sao-paulo',
  markerType: 'home',
  location: {
    latitude: -22.9050824,
    longitude: -47.0613327
  },
  gallery: [
    {
      url: 'https://sa-east-1.graphassets.com/AZLmvswWRY2aYw5qUkF2Vz/8nQILXzQJQquJPvnZ6gN',
      height: 1200,
      width: 1600
    }
  ]
}

const ubatuba: IPlaceMock = {
  id: 'cljeweplm16hx0bkfe6sjlqwg',
  name: 'Ubatuba, São Paulo',
  slug: 'ubatuba-sao-paulo',
  markerType: 'car',
  location: {
    latitude: -23.4337941,
    longitude: -45.085956
  },
  gallery: [
    {
      url: 'https://sa-east-1.graphassets.com/AZLmvswWRY2aYw5qUkF2Vz/5arl42RoQu6Gz24dTXv6',
      height: 535,
      width: 800
    }
  ]
}

const venice: IPlaceMock = {
  id: 'clm59ymyt4lex0bm0xzcn4m0j',
  name: 'Venice, Italy',
  slug: 'venice-italy',
  markerType: 'airplane',
  location: {
    latitude: 45.4408474,
    longitude: 12.3155151
  },
  gallery: [
    {
      url: 'https://sa-east-1.graphassets.com/AZLmvswWRY2aYw5qUkF2Vz/J5Clj3FQqKdlYF8qxqTH',
      height: 1080,
      width: 1080
    }
  ]
}

const cairo: IPlaceMock = {
  id: 'clm7sf3d403nn0bj1iku6kif7',
  name: 'Cairo, Egypt',
  slug: 'cairo-egypt',
  markerType: 'target',
  location: {
    latitude: 30.0444196,
    longitude: 31.2357116
  },
  gallery: [
    {
      url: 'https://sa-east-1.graphassets.com/AZLmvswWRY2aYw5qUkF2Vz/ObUcYLtASqqFVfC8ufeT',
      caption: 'Sphinx of Giza',
      height: 480,
      width: 640
    }
  ]
}

export const placesMock = {
  campinas,
  ubatuba,
  venice,
  cairo,
  list: [campinas, ubatuba, venice, cairo],
  arrayList: [
    [campinas.name, campinas],
    [ubatuba.name, ubatuba],
    [venice.name, venice],
    [cairo.name, cairo]
  ]
}
