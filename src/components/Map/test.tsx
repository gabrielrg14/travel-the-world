import { render, screen } from '@testing-library/react'

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

  it('should render with the home icon in correct place', () => {
    const places = [
      {
        id: '1',
        name: 'Campinas',
        slug: 'campinas',
        markerType: 'home',
        location: {
          latitude: 0,
          longitude: 0
        }
      }
    ]

    render(<Map places={places} />)

    expect(screen.getByTitle(/campinas/i)).toBeInTheDocument()
    expect(screen.getByTitle(/campinas/i)).toHaveAttribute('title', 'Campinas')
    expect(screen.getByTitle(/campinas/i)).toHaveAttribute(
      'src',
      'img/home-128.png'
    )
  })

  it('should render with the travel icon in correct place', () => {
    const places = [
      {
        id: '2',
        name: 'Ubatuba',
        slug: 'ubatuba',
        markerType: 'travel',
        location: {
          latitude: 110,
          longitude: -15
        }
      }
    ]

    render(<Map places={places} />)

    expect(screen.getByTitle(/ubatuba/i)).toBeInTheDocument()
    expect(screen.getByTitle(/ubatuba/i)).toHaveAttribute('title', 'Ubatuba')
    expect(screen.getByTitle(/ubatuba/i)).toHaveAttribute(
      'src',
      'img/travel-128.png'
    )
  })

  it('should render with the target icon in correct place', () => {
    const places = [
      {
        id: '3',
        name: 'Canadá',
        slug: 'canada',
        markerType: 'target',
        location: {
          latitude: 221,
          longitude: -30
        }
      }
    ]

    render(<Map places={places} />)

    expect(screen.getByTitle(/canadá/i)).toBeInTheDocument()
    expect(screen.getByTitle(/canadá/i)).toHaveAttribute('title', 'Canadá')
    expect(screen.getByTitle(/canadá/i)).toHaveAttribute(
      'src',
      'img/target-128.png'
    )
  })
})
