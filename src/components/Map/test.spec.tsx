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

  it('should render the marker home icon', () => {
    render(<Map places={[placeMocks.campinas]} />)

    const campinasPlace = screen.getByTitle(/campinas/i)

    expect(campinasPlace).toBeInTheDocument()
    expect(campinasPlace).toHaveAttribute('title', 'Campinas, São Paulo')
    expect(campinasPlace).toHaveAttribute('src', 'images/marker/home.png')
  })

  it('should render the marker travel icon', () => {
    render(<Map places={[placeMocks.ubatuba]} />)

    const ubatubaPlace = screen.getByTitle(/ubatuba/i)

    expect(ubatubaPlace).toBeInTheDocument()
    expect(ubatubaPlace).toHaveAttribute('title', 'Ubatuba, São Paulo')
    expect(ubatubaPlace).toHaveAttribute('src', 'images/marker/travel.png')
  })

  it('should render the marker target icon', () => {
    render(<Map places={[placeMocks.canada]} />)

    const canadaPlace = screen.getByTitle(/canadá/i)

    expect(canadaPlace).toBeInTheDocument()
    expect(canadaPlace).toHaveAttribute('title', 'Toronto, Canadá')
    expect(canadaPlace).toHaveAttribute('src', 'images/marker/target.png')
  })

  it('should render the places of campinas, ubatuba and canada', () => {
    render(<Map places={placeMocks.list} />)

    expect(screen.getByTitle(/campinas/i)).toBeInTheDocument()
    expect(screen.getByTitle(/ubatuba/i)).toBeInTheDocument()
    expect(screen.getByTitle(/canadá/i)).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /marker/i })).toHaveLength(3)
  })
})
