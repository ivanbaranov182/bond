import { useState } from "react"
import classNames from "classnames"

import { Button } from "../Button"
import { type ListComponentProps } from "../type"

import cls from "./ButtonGroup.module.css"

export const ButtonGroup: React.FC<ListComponentProps> = ({ items, onChange, className, initialIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex)

  const onClick = (i: number) => {
    setActiveIndex(i)
    onChange(i)
  }

  return (
    <div className={className}>
      {items.map(({ title }, i) => (
        <Button
          onClick={() => onClick(i)}
          key={title}
          className={classNames(cls.groupButton, activeIndex === i && cls.activeButton)}
        >
          {title}
        </Button>
      ))}
    </div>
  )
}
