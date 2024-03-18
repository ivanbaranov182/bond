import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { type DateFilterType, type Bond, type FieldFilterType, type BondStatistic } from "./type"

type GetBondStatisticParams = Record<"isin", string> & { dateInterval: DateFilterType; field: FieldFilterType }

export const bondApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  reducerPath: "bondApi",
  tagTypes: ["bond"],
  endpoints: build => ({
    getBond: build.query<Bond, string>({
      query: (isin: string) => `/bond/${isin}`,
      // TODO: providesTags
    }),
    getBondStatistic: build.query<BondStatistic, GetBondStatisticParams>({
      query: ({ isin, ...restParams }: GetBondStatisticParams) => {
        const params = new URLSearchParams(restParams).toString()
        return `/bond/${isin}/statistic?${params}`
      },
      // TODO: providesTags
    }),
  }),
})

export const { useGetBondQuery, useGetBondStatisticQuery } = bondApiSlice
