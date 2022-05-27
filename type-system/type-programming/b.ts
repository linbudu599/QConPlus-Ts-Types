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
