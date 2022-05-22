// Top Type 类型层级的最顶端！
type Result1 = Object extends any ? 1 : 2; // 1
type Result2 = Object extends unknown ? 1 : 2; // 1

// unknown 2
// {} 1
type Result3 = any extends Object ? 1 : 2; // 1 | 2
type Result4 = unknown extends Object ? 1 : 2; // 2

type Result5 = any extends 'linbudu' ? 1 : 2; // 1 | 2
type Result6 = any extends string ? 1 : 2; // 1 | 2
type Result7 = any extends {} ? 1 : 2; // 1 | 2
type Result8 = any extends never ? 1 : 2; // 1 | 2

type Result10 = any extends unknown ? 1 : 2; // 1
type Result11 = unknown extends any ? 1 : 2; // 1

export {};
