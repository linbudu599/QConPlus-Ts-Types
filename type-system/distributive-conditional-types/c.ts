// 差集
type Exclude<T, U extends T> = T extends U ? never : T;

type Res1 = Exclude<1 | 2 | 3, 1 | 2>;

// 交集
type Extract<T, U> = T extends U ? T : never;

type Res2 = Extract<1 | 2 | 3, 1 | 2>;

// 并集！补集！
// [1,2,3] [1,2]

export {};
