import { render, screen } from '@testing-library/react'

import IconLegend from '.'

describe('<IconLegend />', () => {
  it('should render icon caption of my place with text, image and link', () => {
    render(<IconLegend />)

    const text = screen.getByText(/my place/i)
    const img = screen.getByRole('img', {
      name: /home icon/i
    })
    const link = screen.getByRole('link', {
      name: /maps-and-location icons/i
    })

    expect(text).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('title', 'maps-and-location icons')
    expect(link).toHaveAttribute(
      'href',
      'https://www.flaticon.com/free-icons/maps-and-location'
    )
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAccessibleName()
  })

  it('should render icon caption of visited place with text, image and link', () => {
    render(<IconLegend />)

    const text = screen.getByText(/place visited/i)
    const img = screen.getByRole('img', {
      name: /travel icon/i
    })
    const link = screen.getByRole('link', {
      name: /airplane icons/i
    })

    expect(text).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('title', 'airplane icons')
    expect(link).toHaveAttribute(
      'href',
      'https://www.flaticon.com/free-icons/airplane'
    )
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAccessibleName()
  })

  it('should render icon caption of place to be visited with text, image and link', () => {
    render(<IconLegend />)

    const text = screen.getByText(/place to be visited/i)
    const img = screen.getByRole('img', {
      name: /target icon/i
    })
    const link = screen.getByRole('link', {
      name: /goal icons/i
    })

    expect(text).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('title', 'goal icons')
    expect(link).toHaveAttribute(
      'href',
      'https://www.flaticon.com/free-icons/goal'
    )
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAccessibleName()
  })

  it('should render the link to the icons of juicy_fish with the correct attributes', () => {
    render(<IconLegend />)

    const link = screen.getByRole('link', {
      name: 'juicy_fish'
    })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('title', 'juicy_fish icons')
    expect(link).toHaveAttribute(
      'href',
      'https://www.flaticon.com/authors/juicy-fish'
    )
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAccessibleName()
  })

  it('should render the link of flaticon platform with the correct attributes', () => {
    render(<IconLegend />)

    const link = screen.getByRole('link', {
      name: 'Flaticon'
    })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.flaticon.com/')
    expect(link).toHaveAttribute('title', 'flaticon')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAccessibleName()
  })
})
