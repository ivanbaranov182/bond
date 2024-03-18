import { type Bond } from "../../type"

import cls from "./BondCardMeta.module.css"

type BondCardMetaProps = Bond

export const BondCardMeta: React.FC<BondCardMetaProps> = ({ title, currency, id, description }) => {
  return (
    <div className={cls.bondCardMeta}>
      <div className={cls.header}>
        <span className={cls.title}>{title}</span>
        <span className={cls.currency}>{currency}</span>
      </div>
      <div className={cls.info}>
        <div>{id}</div>
        <div>{description}</div>
      </div>
    </div>
  )
}
