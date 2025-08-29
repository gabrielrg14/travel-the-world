import { render, screen } from '@testing-library/react'
import { legendMocks } from 'test/mocks'

import { LegendLink } from '.'

describe('<LegendLink />', () => {
  it('should render with children and the correct attributes', () => {
    render(<LegendLink {...legendMocks[0]}>Anything</LegendLink>)

    const link = screen.getByRole('link', { name: /anything/i })

    expect(screen.getByText(/anything/i)).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/anything')
    expect(link).toHaveAttribute('title', 'Anything')
    expect(link).toHaveAttribute('aria-label', 'Anything')
    expect(link).toHaveAccessibleName(/anything/i)
  })

  it('should render with text and the correct attributes', () => {
    render(<LegendLink {...legendMocks[1]} />)

    const link = screen.getByRole('link', { name: /legend/i })

    expect(screen.getByText(/legend/i)).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/legend')
    expect(link).toHaveAttribute('title', 'Legend')
    expect(link).toHaveAttribute('aria-label', 'Legend')
    expect(link).toHaveAccessibleName(/legend/i)
  })
})
