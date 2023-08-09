import { render, screen } from '@testing-library/react'

import IconLegend from '.'

describe('<IconLegend />', () => {
  it('should render the link to the icons of juicy_fish with the correct attributes', () => {
    render(<IconLegend />)

    const link = screen.getByRole('link', {
      name: /juicy_fish/i
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
      name: /flaticon/i
    })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.flaticon.com/')
    expect(link).toHaveAttribute('title', 'flaticon')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAccessibleName()
  })
})
