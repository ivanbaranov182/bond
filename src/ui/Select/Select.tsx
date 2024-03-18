import { type ChangeEvent, useState } from "react"
import classNames from "classnames"

import { type ListComponentProps } from "../type"

import cls from "./Select.module.css"

export const Select: React.FC<ListComponentProps> = ({ items, onChange, className, initialIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex)

  const onClick = (i: ChangeEvent<HTMLSelectElement>) => {
    const index = +i.target.value
    setActiveIndex(index)
    onChange(index)
  }

  return (
    <select className={classNames(cls.select, className)} defaultValue={activeIndex} onChange={onClick}>
      {items.map(({ title }, i) => (
        <option value={i} key={title}>
          {title}
        </option>
      ))}
    </select>
  )
}
