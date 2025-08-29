import Link, { LinkProps } from 'next/link'

import { ILegend } from 'interfaces'

type LegendLinkProps = ILegend &
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
