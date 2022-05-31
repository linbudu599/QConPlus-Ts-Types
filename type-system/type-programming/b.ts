/**
 * 实现基于值类型的 PickByValueType
 */
interface Struct {
  foo: string;
  bar: number;
  baz: boolean;
  handler: () => {};
}

type PickByValueType<T, ValueType> = T;

// { foo: string }
type Res1 = PickByValueType<Struct, string>;

// { handler: () => {} }
type Res2 = PickByValueType<Struct, Function>;

type PickKeysByValueType<T, ValueType> = {
  [Key in keyof T]-?: T[Key] extends ValueType ? Key : never;
}[keyof T];

export {};
