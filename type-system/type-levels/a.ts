// 字面量类型 - 对应的原始类型
// 数字、字符串、布尔值、对象字面量类型 -> 对应的原始类型
const name: 'linbudu' = 'linbudu';
type Result1 = 'linbudu' extends string ? 1 : 2; // 1
type Result2 = 1 extends number ? 1 : 2; // 1
type Result3 = true extends boolean ? 1 : 2; // 1
// object：一切非原始类型的类型：数组、函数
// object 的字面量类型
type Result4 = { name: string } extends object ? 1 : 2; // 1
type Result5 = (() => void) extends object ? 1 : 2; // 1
type Result6 = [] extends object ? 1 : 2; // 1

export {};
