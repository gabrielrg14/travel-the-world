const campinas = {
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
      url: 'https://media.graphassets.com/8nQILXzQJQquJPvnZ6gN',
      height: 1200,
      width: 1600
    }
  ]
}

const ubatuba = {
  id: 'cljeweplm16hx0bkfe6sjlqwg',
  name: 'Ubatuba, São Paulo',
  slug: 'ubatuba-sao-paulo',
  markerType: 'travel',
  location: {
    latitude: -23.4337941,
    longitude: -45.085956
  },
  gallery: [
    {
      url: 'https://media.graphassets.com/5arl42RoQu6Gz24dTXv6',
      height: 535,
      width: 800
    }
  ]
}

const canada = {
  id: 'clm6dfini5k8t0alvp6ir058i',
  name: 'Toronto, Canadá',
  slug: 'toronto-canada',
  markerType: 'target',
  location: {
    latitude: 43.653226,
    longitude: -79.3831843
  },
  gallery: [
    {
      url: 'https://media.graphassets.com/YOk2aLVSHaHb1hYcTY7A',
      height: 1894,
      width: 2400
    }
  ]
}

export const placeMocks = {
  campinas,
  ubatuba,
  canada,
  list: [campinas, ubatuba, canada]
}
