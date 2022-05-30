// (1 | 2)[] extends (1 | 2 | 3)[] ?
// 阻止裸露
type CompareUnion<T, U> = [T] extends [U] ? true : false;

// {} 万物起源
type NoDistributiveConditionalType<T> = T & {};

type CompareRes1 = CompareUnion<1 | 2, 1 | 2 | 3>; // true
type CompareRes2 = CompareUnion<1 | 2, 1>; // false

export {};
