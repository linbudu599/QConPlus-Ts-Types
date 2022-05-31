import { PickByValueType } from './c';
// {foo:string, bar:string} K "foo"|"bar"
// 索引类型查询
// 索引类型声明
// {[K: string]: any;}
// map
// T["foo"] 索引类型访问
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 工具类型的正向、反向类型实现
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// 基于已知键名进行结构裁剪

// 100个属性，50
// 50个字符串类型属性？
// 数字+布尔值+函数

// 结构工具类型9

// 内置类型的原理了解
// 内置类型如何进阶
// TypeChallenges Vue 底层工具类型实现

export {};
