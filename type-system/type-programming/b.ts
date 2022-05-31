/**
 * 实现基于值类型的 PickByValueType
 */
interface Struct {
  foo: string;
  bar: number;
  baz: boolean;
  handler: () => {};
}

// "foo", Pick<Struct, "foo">

type PickByValueType<T, ValueType> = Pick<T, PickKeysByValueType<T, ValueType>>;

// { foo: string }
type Res1 = PickByValueType<Struct, string>;

// { handler: () => {} }
type Res2 = PickByValueType<Struct, Function>;

// OmitByValueType

// 类型编程的最常用思维方式

type PickKeysByValueType<T, ValueType> = {
  [Key in keyof T]-?: T[Key] extends ValueType ? Key : never;
}[keyof T];

// {"foo":never,"bar":"bar","baz":"baz","handler":"handler"}
type OmitKeysByValueType<T, ValueType> = {
  [Key in keyof T]-?: T[Key] extends ValueType ? never : Key;
}[keyof T];

// Conditional<V, Exp, R1, R2>

// 封装实现逻辑相近的工具类型底层辅助实现

export {};
