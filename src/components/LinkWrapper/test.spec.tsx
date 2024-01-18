import { render, screen } from '@testing-library/react'

import { LinkWrapper } from '.'

describe('<LinkWrapper />', () => {
  it('should render with children and the correct attributes', () => {
    render(
      <LinkWrapper href="/my-link" aria-label="anything">
        Anything
      </LinkWrapper>
    )

    const link = screen.getByRole('link', { name: /anything/i })

    expect(screen.getByText(/anything/i)).toBeInTheDocument()
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/my-link')
    expect(link).toHaveAccessibleName(/anything/i)
  })
})
