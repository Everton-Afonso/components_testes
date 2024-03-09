export interface Props {
  open?: boolean
  close?: () => void
  openingPosition?: 'left' | 'right'
  children?: React.ReactNode
  titleWrapper?: string
}

export interface DrawerProps extends Props {
  iconDrawer?: React.ReactNode
}

export const defaultProps: Props = {
  open: false,
  openingPosition: 'right'
}
