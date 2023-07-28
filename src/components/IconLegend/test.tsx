import { render, screen } from '@testing-library/react'

import IconLegend from '.'

describe('<IconLegend />', () => {
  it('should render the link to the icons of juicy_fish', () => {
    render(<IconLegend />)

    expect(
      screen.getByRole('link', {
        name: /juicy_fish/i
      })
    ).toBeInTheDocument()
  })

  it('should render the link of flaticon platform', () => {
    render(<IconLegend />)

    expect(
      screen.getByRole('link', {
        name: /flaticon/i
      })
    ).toBeInTheDocument()
  })
})
