// Bottom Type
// 字面量类型 < 原始类型
type Result1 = never extends 'linbudu' ? 1 : 2; // 1

type Result2 = undefined extends 'linbudu' ? 1 : 2; // 2
type Result3 = null extends 'linbudu' ? 1 : 2; // 2
type Result4 = void extends 'linbudu' ? 1 : 2; // 2

export {};
