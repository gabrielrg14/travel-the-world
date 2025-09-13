import { render, screen } from '@testing-library/react'

import Map from '.'
import { IPlaceMock, placesMock } from 'test/mocks'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /leaflet/i
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /openstreetmap/i
      })
    ).toBeInTheDocument()
  })

  it('should render the home marker icon', () => {
    render(<Map places={[placesMock.campinas]} />)

    const homeMarker = screen.getByRole('button', { name: /home marker/i })

    expect(homeMarker).toBeInTheDocument()
    expect(homeMarker).toHaveAttribute('src', 'images/marker/home.png')
  })

  it('should render the car marker icon', () => {
    render(<Map places={[placesMock.ubatuba]} />)

    const carMarker = screen.getByRole('button', { name: /car marker/i })

    expect(carMarker).toBeInTheDocument()
    expect(carMarker).toHaveAttribute('src', 'images/marker/car.png')
  })

  it('should render the airplane marker icon', () => {
    render(<Map places={[placesMock.venice]} />)

    const airplaneMarker = screen.getByRole('button', {
      name: /airplane marker/i
    })

    expect(airplaneMarker).toBeInTheDocument()
    expect(airplaneMarker).toHaveAttribute('src', 'images/marker/airplane.png')
  })

  it('should render the target marker icon', () => {
    render(<Map places={[placesMock.cairo]} />)

    const targetMarker = screen.getByRole('button', { name: /target marker/i })

    expect(targetMarker).toBeInTheDocument()
    expect(targetMarker).toHaveAttribute('src', 'images/marker/target.png')
  })

  it.each(placesMock.arrayList)(
    'should render the correct marker icon for %s',
    (name, place) => {
      const placeName = name as string
      const placeMock = place as IPlaceMock

      render(<Map places={[placeMock]} />)

      const placeMarker = screen.getByTitle(placeName)

      expect(placeMarker).toBeInTheDocument()
      expect(placeMarker).toHaveAttribute('title', placeName)
      expect(placeMarker).toHaveAttribute(
        'src',
        `images/marker/${placeMock.markerType}.png`
      )
    }
  )

  it('should render the markers of Campinas, Ubatuba, Venice and Cairo', () => {
    render(<Map places={placesMock.list} />)

    expect(screen.getByTitle(/campinas/i)).toBeInTheDocument()
    expect(screen.getByTitle(/ubatuba/i)).toBeInTheDocument()
    expect(screen.getByTitle(/venice/i)).toBeInTheDocument()
    expect(screen.getByTitle(/cairo/i)).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /marker/i })).toHaveLength(4)
  })
})
