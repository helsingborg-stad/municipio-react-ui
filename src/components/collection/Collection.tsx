import React from 'react'

const Collection = ({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>): JSX.Element => (
  <div
    {...props}
    className={['c-collection', ...(className ? [className] : [])].join(' ')}
  >
    {children}
  </div>
)
interface CollectionItemProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLAnchorElement> {
  href?: string
}

const CollectionItem = ({
  children,
  className,
  href,
  ...props
}: CollectionItemProps): JSX.Element => (
  (className = [
    'c-collection__item',
    ...(href ? ['c-collection__item--action'] : []),
    ...(className ? [className] : []),
  ].join(' ')),
  typeof href === 'string' ? (
    <a {...props} className={className} href={href}>
      {children}
    </a>
  ) : (
    <div {...props} className={className}>
      {children}
    </div>
  )
)

const CollectionContent = ({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>): JSX.Element => (
  <div
    {...props}
    className={[
      'c-collection__content',
      ...(className ? [className] : []),
    ].join(' ')}
  >
    {children}
  </div>
)

const CollectionIcon = ({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>): JSX.Element => (
  <div
    {...props}
    className={['c-collection__icon', ...(className ? [className] : [])].join(
      ' ',
    )}
  >
    {children}
  </div>
)

const CollectionSecondary = ({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>): JSX.Element => (
  <div
    {...props}
    className={[
      'c-collection__secondary',
      ...(className ? [className] : []),
    ].join(' ')}
  >
    {children}
  </div>
)

export {
  Collection,
  CollectionItem,
  CollectionContent,
  CollectionIcon,
  CollectionSecondary,
}
