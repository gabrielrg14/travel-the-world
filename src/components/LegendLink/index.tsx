import Link, { LinkProps } from 'next/link'

import { ILegendLink } from 'interfaces'

type LegendLinkProps = ILegendLink &
  LinkProps & {
    children?: React.ReactNode
  }

export const LegendLink = ({
  label,
  children,
  text,
  ...props
}: LegendLinkProps) => (
  <Link {...props} aria-label={label} target="_blank">
    {children || text}
  </Link>
)
