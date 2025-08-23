import { render, screen } from '@testing-library/react'
import { placeMocks } from 'test/mocks'

import Map from '.'

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

  it('should render the home marker icon for campinas', () => {
    render(<Map places={[placeMocks.campinas]} />)

    const campinasPlace = screen.getByTitle(/campinas/i)

    expect(campinasPlace).toBeInTheDocument()
    expect(campinasPlace).toHaveAttribute('title', 'Campinas, São Paulo')
    expect(campinasPlace).toHaveAttribute('src', 'images/marker/home.png')
  })

  it('should render the car marker icon for ubatuba', () => {
    render(<Map places={[placeMocks.ubatuba]} />)

    const ubatubaPlace = screen.getByTitle(/ubatuba/i)

    expect(ubatubaPlace).toBeInTheDocument()
    expect(ubatubaPlace).toHaveAttribute('title', 'Ubatuba, São Paulo')
    expect(ubatubaPlace).toHaveAttribute('src', 'images/marker/car.png')
  })

  it('should render the airplane marker icon for venezia', () => {
    render(<Map places={[placeMocks.venezia]} />)

    const veneziaPlace = screen.getByTitle(/venezia/i)

    expect(veneziaPlace).toBeInTheDocument()
    expect(veneziaPlace).toHaveAttribute('title', 'Venezia, Italy')
    expect(veneziaPlace).toHaveAttribute('src', 'images/marker/airplane.png')
  })

  it('should render the target marker icon for cairo', () => {
    render(<Map places={[placeMocks.cairo]} />)

    const cairoPlace = screen.getByTitle(/cairo/i)

    expect(cairoPlace).toBeInTheDocument()
    expect(cairoPlace).toHaveAttribute('title', 'Cairo, Egypt')
    expect(cairoPlace).toHaveAttribute('src', 'images/marker/target.png')
  })

  it('should render the places of campinas, ubatuba, venezia and cairo', () => {
    render(<Map places={placeMocks.list} />)

    expect(screen.getByTitle(/campinas/i)).toBeInTheDocument()
    expect(screen.getByTitle(/ubatuba/i)).toBeInTheDocument()
    expect(screen.getByTitle(/venezia/i)).toBeInTheDocument()
    expect(screen.getByTitle(/cairo/i)).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /marker/i })).toHaveLength(4)
  })
})
