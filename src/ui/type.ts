export interface ListComponentProps {
  items: { title: string }[]
  onChange: (index: number) => void
  className?: string
  initialIndex?: number
}
