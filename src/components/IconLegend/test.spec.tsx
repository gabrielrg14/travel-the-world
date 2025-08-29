import { render, screen } from '@testing-library/react'

import { IconLegend } from '.'

describe('<IconLegend />', () => {
  it('should render icon caption of my place with text, image and link', () => {
    render(<IconLegend />)

    const text = screen.getByText(/my place/i)
    const image = screen.getByRole('img', {
      name: /home icon/i
    })
    const link = screen.getByTitle('Home')

    expect(text).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('title', 'Home icon')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('title', 'Home')
    expect(link).toHaveAttribute(
      'href',
      'https://www.flaticon.com/free-icons/maps-and-location'
    )
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAccessibleName(
      /maps and location icons created by juicy_fish/i
    )
  })

  it('should render icon caption of place visited by car with text, image and link', () => {
    render(<IconLegend />)

    const text = screen.getByText(/visited by car/i)
    const image = screen.getByRole('img', {
      name: /car icon/i
    })
    const link = screen.getByTitle('Car')

    expect(text).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('title', 'Car icon')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('title', 'Car')
    expect(link).toHaveAttribute(
      'href',
      'https://www.flaticon.com/free-icons/maps-and-location'
    )
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAccessibleName(
      /maps and location icons created by juicy_fish/i
    )
  })

  it('should render icon caption of place visited by airplane with text, image and link', () => {
    render(<IconLegend />)

    const text = screen.getByText(/visited by airplane/i)
    const image = screen.getByRole('img', {
      name: /airplane icon/i
    })
    const link = screen.getByTitle('Airplane')

    expect(text).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('title', 'Airplane icon')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('title', 'Airplane')
    expect(link).toHaveAttribute(
      'href',
      'https://www.flaticon.com/free-icons/airplane'
    )
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAccessibleName(/airplane icons created by juicy_fish/i)
  })

  it('should render icon caption of place to be visited with text, image and link', () => {
    render(<IconLegend />)

    const text = screen.getByText(/to be visited/i)
    const image = screen.getByRole('img', {
      name: /target icon/i
    })
    const link = screen.getByTitle('Target')

    expect(text).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('title', 'Target icon')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('title', 'Target')
    expect(link).toHaveAttribute(
      'href',
      'https://www.flaticon.com/free-icons/goal'
    )
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAccessibleName(/goal icons created by juicy_fish/i)
  })

  it('should render the link of juicy_fish icons with the correct attributes', () => {
    render(<IconLegend />)

    const link = screen.getByTitle(/juicy_fish/i)

    expect(screen.getByText(/juicy_fish/i)).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('title', 'juicy_fish icons')
    expect(link).toHaveAttribute(
      'href',
      'https://www.flaticon.com/authors/juicy-fish'
    )
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAccessibleName(/go to juicy_fish icons/i)
  })

  it('should render the link of flaticon platform with the correct attributes', () => {
    render(<IconLegend />)

    const link = screen.getByTitle(/flaticon/i)

    expect(screen.getByText(/flaticon/i)).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.flaticon.com')
    expect(link).toHaveAttribute('title', 'Flaticon')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAccessibleName(/go to flaticon/i)
  })
})
