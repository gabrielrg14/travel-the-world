import { render, screen } from '@testing-library/react'

import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render the link with the correct attributes and the children', () => {
    render(
      <LinkWrapper href="/my-link" ariaLabel="anything">
        Anything
      </LinkWrapper>
    )

    const link = screen.getByRole('link', { name: /anything/i })
    const children = screen.getByText(/anything/i)

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/my-link')
    expect(link).toHaveAccessibleName()
    expect(children).toBeInTheDocument()
  })
})
