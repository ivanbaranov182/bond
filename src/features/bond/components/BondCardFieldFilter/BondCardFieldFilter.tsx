import { Select } from "@/ui/Select"

import { FieldFilter, type FieldFilterType } from "../../type"

import cls from "./BondCardFieldFilter.module.css"

interface BondCardDateFilterProps<T = FieldFilterType> {
  value: T
  setValue: (value: T) => void
}

const fieldFilters = Object.values(FieldFilter)

export const BondCardFieldFilter: React.FC<BondCardDateFilterProps> = ({ value, setValue }) => {
  const items = fieldFilters.map(title => ({ title }))

  const initialIndex = items.findIndex(({ title }) => title === value)

  const onFilterChange = (index: number) => {
    const interval = items[index].title
    setValue(interval)
  }

  return <Select items={items} onChange={onFilterChange} className={cls.dateSelector} initialIndex={initialIndex} />
}
