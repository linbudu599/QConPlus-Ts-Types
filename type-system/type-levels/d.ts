// 装箱类型
type Result1 = string extends String ? 1 : 2; // 1

// 结构化类型
type Result2 = String extends {} ? 1 : 2; // 1
type Result3 = {} extends object ? 1 : 2; // 1

// 类型世界的基本规则
type Result4 = object extends Object ? 1 : 2; // 1
type Result5 = Object extends object ? 1 : 2;

type Result6 = Object extends {} ? 1 : 2; // 1
type Result7 = {} extends Object ? 1 : 2; // 1

export {};
