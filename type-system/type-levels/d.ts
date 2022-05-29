// 装箱类型 String Number Boolean
type Result1 = string extends String ? 1 : 2; // 1

// 结构化类型
// {} -> 万物起源
type Result2 = String extends {} ? 1 : 2; // 1
// object
type Result3 = {} extends object ? 1 : 2; // 1

// 类型世界的基本规则
type Result4 = object extends Object ? 1 : 2; // 1
// object -> 非原始类型的类型
// 进行的判断定理不同
type Result5 = Object extends object ? 1 : 2;

// 结构化
type Result6 = Object extends {} ? 1 : 2; // 1
// 字面量
type Result7 = {} extends Object ? 1 : 2; // 1

export {};
