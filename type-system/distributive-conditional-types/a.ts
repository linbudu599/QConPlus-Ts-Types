type Condition<T> = T extends 1 | 2 | 3 ? T : never;

// 1 | 2 | 3
type Res1 = Condition<1 | 2 | 3 | 4 | 5>;

// never
type Res2 = 1 | 2 | 3 | 4 | 5 extends 1 | 2 | 3 ? 1 | 2 | 3 | 4 | 5 : never;

// 差异1：通过泛型参数

// (number extends boolean) | (boolean extends boolean)
type Naked<T> = T extends boolean ? 'Y' : 'N';
// (number | boolean)[] extends boolean[]
type Wrapped<T> = [T] extends [boolean] ? 'Y' : 'N';

// "N" | "Y"
type Res3 = Naked<number | boolean>;

// "N"
type Res4 = Wrapped<number | boolean>;

export {};

// 差异2：泛型参数的裸露
// 差异3：需要是联合类型
