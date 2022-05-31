import { expectType } from 'tsd';

export type PlainObjectType = Record<string, any>;

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
> = {
  [Key in keyof T]-?: StrictConditional<
    ValueType,
    T[Key],
    Positive extends true ? Key : never,
    Positive extends true ? never : Key,
    Positive extends true ? never : Key
  >;
}[keyof T];

export type StrictPickByValueType<T extends PlainObjectType, ValueType> = Pick<
  T,
  StrictValueTypeFilter<T, ValueType, true>
>;

export type StrictOmitByValueType<T extends PlainObjectType, ValueType> = Pick<
  T,
  StrictValueTypeFilter<T, ValueType, false>
>;

expectType<
  StrictPickByValueType<{ foo: 1; bar: 1 | 2; baz: 1 | 2 | 3 }, 1 | 2>
>({
  bar: 1,
});

expectType<
  StrictOmitByValueType<{ foo: 1; bar: 1 | 2; baz: 1 | 2 | 3 }, 1 | 2>
>({
  foo: 1,
  baz: 3,
});
