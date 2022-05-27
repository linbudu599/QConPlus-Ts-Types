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

export type ValueTypeFilterPositive<
  T extends PlainObjectType,
  ValueType
> = Pick<
  T,
  {
    [Key in keyof T]-?: T[Key] extends ValueType ? Key : never;
  }[keyof T]
>;

type Conditional<Value, Condition, Resolved, Rejected> = Value extends Condition
  ? Resolved
  : Rejected;

export type ValueTypeFilter<
  T extends object,
  ValueType,
  Positive extends boolean
> = {
  [Key in keyof T]-?: T[Key] extends ValueType
    ? Conditional<Positive, true, Key, never>
    : Conditional<Positive, true, never, Key>;
}[keyof T];

export type PickByValue<T extends PlainObjectType, ValueType> = ValueTypeFilter<
  T,
  ValueType,
  true
>;

export type OmitByValue<T extends PlainObjectType, ValueType> = ValueTypeFilter<
  T,
  ValueType,
  false
>;

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

type IsAny<T> = 0 extends 1 & T ? true : false; // https://stackoverflow.com/a/49928360/3406963
type IsNever<T> = [T] extends [never] ? true : false;
type IsUnknown<T> = IsNever<T> extends false
  ? T extends unknown
    ? unknown extends T
      ? IsAny<T> extends false
        ? true
        : false
      : false
    : false
  : false;
