import { render, screen } from '@testing-library/react'

import { LinkWrapper } from '.'

describe('<LinkWrapper />', () => {
  it('should render with children and the correct attributes', () => {
    render(
      <LinkWrapper href="/anything" title="Anything" aria-label="Anything">
        Anything
      </LinkWrapper>
    )

    const link = screen.getByRole('link', { name: /anything/i })

    expect(screen.getByText(/anything/i)).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/anything')
    expect(link).toHaveAttribute('title', 'Anything')
    expect(link).toHaveAttribute('aria-label', 'Anything')
    expect(link).toHaveAccessibleName(/anything/i)
  })
})
