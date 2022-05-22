type IsNever<T> = [T] extends [never] ? true : false;

type IsNeverRes1 = IsNever<never>; // true
type IsNeverRes2 = IsNever<'linbudu'>; // false

type Tmp1 = any extends string ? 1 : 2; // 1 | 2

// any > 直接拼接结果
type Tmp2<T> = T extends string ? 1 : 2;
type Tmp2Res = Tmp2<any>; // 1 | 2

// never 泛型参数 > never
type Tmp3 = never extends string ? 1 : 2; // 1

type Tmp4<T> = T extends string ? 1 : 2;
type Tmp4Res = Tmp4<never>; // never

export {};
