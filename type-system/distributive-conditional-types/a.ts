type Condition<T> = T extends 1 | 2 | 3 ? T : never;

// 1 | 2 | 3
type Res1 = Condition<1 | 2 | 3 | 4 | 5>;

// never
type Res2 = 1 | 2 | 3 | 4 | 5 extends 1 | 2 | 3 ? 1 | 2 | 3 | 4 | 5 : never;

type Naked<T> = T extends boolean ? 'Y' : 'N';
type Wrapped<T> = [T] extends [boolean] ? 'Y' : 'N';

// "N" | "Y"
type Res3 = Naked<number | boolean>;

// "N"
type Res4 = Wrapped<number | boolean>;

export {};
