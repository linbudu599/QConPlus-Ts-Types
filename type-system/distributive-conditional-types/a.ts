type Condition<T> = T extends 1 | 2 | 3 ? T : never;

// 1 | 2 | 3
// 1 extends 1 | 2 | 3 ? 1 : never + 2 extends 1 | 2 | 3 ? 2 : never + 3 extends 1 | 2 | 3 ? 3 : never
type Res1 = Condition<1 | 2 | 3 | 4 | 5>;

// never
type Res2 = 1 | 2 | 3 | 4 | 5 extends 1 | 2 | 3 ? 1 | 2 | 3 | 4 | 5 : never;

// 差异1：是否通过泛型参数传入

type Naked<T> = T extends boolean ? 'Y' : 'N';

// tuple
type Wrapped<T> = [T] extends [boolean] ? 'Y' : 'N';

type Res3 = Naked<number | boolean>; // "N" | "Y"

type Res4 = Wrapped<number | boolean>; // "N"

// 差异2：泛型参数是否裸露

// 共同点：联合类型

// 分布式条件类型的定义

export {};
