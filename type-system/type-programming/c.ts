/**
 * 实现基于值类型的 PickByValueType 与 OmitByValueType
 */

interface Struct {
  foo: string;
  bar: number;
  baz: boolean;
  handler: () => {};
}

export type PlainObjectType = Record<string, any>;

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

export type PickByValueType<T extends PlainObjectType, ValueType> = Pick<
  T,
  ValueTypeFilter<T, ValueType, true>
>;

export type OmitByValueType<T extends PlainObjectType, ValueType> = Pick<
  T,
  ValueTypeFilter<T, ValueType, false>
>;

// { foo: string }
type Res1 = PickByValueType<Struct, string>;

// { handler: () => {} }
type Res2 = PickByValueType<Struct, Function>;

/**
 * {
 *   bar: number;
 *   baz: boolean;
 *   handler: () => {};
 * }
 */
type Res3 = OmitByValueType<Struct, string>;

export {};
