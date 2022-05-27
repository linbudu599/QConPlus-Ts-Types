export type PlainObjectType = Record<string, any>;

export type StrictCompare<T, K, A, B, C = never> = [T] extends [K]
  ? [K] extends [T]
    ? A
    : B
  : C;

type StrictConditional<A, B, Resolved, Rejected, Fallback = never> = [
  A
] extends [B]
  ? [B] extends [A]
    ? Resolved
    : Rejected
  : Fallback;

export type StrictValueTypeFilter<
  T extends PlainObjectType,
  ValueType,
  Positive extends boolean
> = Pick<
  T,
  {
    [Key in keyof T]-?: StrictCompare<
      ValueType,
      T[Key],
      Positive extends true ? Key : never,
      Positive extends true ? never : Key
    >;
  }[keyof T]
>;

export type StrictPickByValue<
  T extends PlainObjectType,
  ValueType
> = StrictValueTypeFilter<T, ValueType, true>;

export type StrictOmitByValue<
  T extends PlainObjectType,
  ValueType
> = StrictValueTypeFilter<T, ValueType, false>;
