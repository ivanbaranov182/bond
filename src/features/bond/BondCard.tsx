import { useState } from "react"

import { Loader } from "@/ui/Loader"

import { BondCardChart } from "./components/BondCardChart"
import { BondCardMeta } from "./components/BondCardMeta"
import { BondCardDateFilter } from "./components/BondCardDateFilter"
import { useGetBondQuery, useGetBondStatisticQuery } from "./bondApiSlice"
import { type FieldFilterType, type DateFilterType } from "./type"

import cls from "./BondCard.module.css"
import { BondCardFieldFilter } from "./components/BondCardFieldFilter/BondCardFieldFilter"

export interface BondCardProps {
  isin: string
}

// TODO compound components
export const BondCard = ({ isin }: BondCardProps) => {
  const [dateInterval, setDateInterval] = useState<DateFilterType>("month")
  const [field, setField] = useState<FieldFilterType>("price")
  const { data: bond, isError, isLoading } = useGetBondQuery(isin)
  const {
    data,
    isError: isStatisticError,
    isLoading: isStatisticLoading,
  } = useGetBondStatisticQuery({ isin, dateInterval, field })

  if (isError || isStatisticError) return <>Something get wrong</>

  if (isLoading || !bond || isStatisticLoading || !data) return <Loader />

  return (
    <div className={cls.card}>
      <BondCardMeta {...bond} />
      {
        // TODO: hoc for filterComponent
      }
      <BondCardDateFilter value={dateInterval} setValue={setDateInterval} />
      <BondCardChart data={data} />
      <BondCardFieldFilter value={field} setValue={setField} />
    </div>
  )
}
