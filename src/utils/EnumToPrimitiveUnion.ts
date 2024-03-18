export type EnumToPrimitiveUnion<T> = `${T & string}` | ParseNumber<`${T & number}`>
type ParseNumber<T> = T extends `${infer U extends number}` ? U : never
