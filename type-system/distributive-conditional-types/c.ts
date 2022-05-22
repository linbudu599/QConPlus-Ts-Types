// 交集
type Exclude<T, U> = T extends U ? never : T;

// 差集
type Extract<T, U> = T extends U ? T : never;

export {};
