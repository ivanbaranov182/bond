import { ButtonGroup } from "@/ui/ButtonGroup"

import { DateFilter, type DateFilterType } from "../../type"

import cls from "./BondCardDateFilter.module.css"

interface BondCardDateFilterProps<T = DateFilterType> {
  value: T
  setValue: (interval: T) => void
}

const dateFilters = Object.values(DateFilter)

export const BondCardDateFilter: React.FC<BondCardDateFilterProps> = ({ value, setValue }) => {
  const items = dateFilters.map(title => ({ title }))

  const initialIndex = items.findIndex(({ title }) => title === value)

  const onFilterChange = (index: number) => {
    const interval = items[index].title
    setValue(interval)
  }

  return (
    <ButtonGroup items={items} onChange={onFilterChange} className={cls.dateSelector} initialIndex={initialIndex} />
  )
}
