// 字面量类型 - 包含字面量类型的联合类型 - 原始类型
// 联合类型
// 子集！
type Result1 = 1 | 2 extends 1 | 2 | 3 ? 1 : 2; // 1
type Result2 = 'lin' extends 'lin' | 'bu' | 'du' ? 1 : 2; // 1
type Result3 = true extends true | false ? 1 : 2; // 1
type Result4 = string extends string | false | number ? 1 : 2; // 1

// 统一字面量联合类型到对应基础类型
// 字 字典
type Result5 = 'lin' | 'bu' | 'budu' extends string ? 1 : 2; // 1
type Result6 = {} | (() => void) | [] extends object ? 1 : 2; // 1

export {};
