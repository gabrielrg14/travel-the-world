import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /openstreetmap/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const places = [
      {
        id: '1',
        name: 'Campinas',
        slug: 'campinas',
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      {
        id: '2',
        name: 'Canadá',
        slug: 'canada',
        location: {
          latitude: 221,
          longitude: -30
        }
      }
    ]

    render(<Map places={places} />)

    expect(screen.getByTitle(/campinas/i)).toBeInTheDocument()
    expect(screen.getByTitle(/canadá/i)).toBeInTheDocument()
  })
})
