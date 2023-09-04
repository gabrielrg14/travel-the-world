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

  it('should render with the marker icon in correct place', () => {
    const places = [
      {
        id: '1',
        name: 'Campinas',
        slug: 'campinas',
        visited: true,
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
      'img/marker-128.png'
    )
  })

  it('should render with the target icon in correct place', () => {
    const places = [
      {
        id: '2',
        name: 'Canadá',
        slug: 'canada',
        visited: false,
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
