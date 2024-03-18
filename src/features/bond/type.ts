import { type EnumToPrimitiveUnion } from "@/utils/EnumToPrimitiveUnion"

export interface Bond {
  title: string
  currency: string
  id: string
  description: string
}

export interface BondStatistic {
  labels: string[]
  data: number[]
}

export enum DateFilter {
  Week = "week",
  Month = "month",
  Quarter = "quarter",
  Year = "year",
  Max = "max",
}

export type DateFilterType = EnumToPrimitiveUnion<DateFilter>

export enum FieldFilter {
  Yield = "yield",
  Spread = "spread",
  Price = "price",
}

export type FieldFilterType = EnumToPrimitiveUnion<FieldFilter>
