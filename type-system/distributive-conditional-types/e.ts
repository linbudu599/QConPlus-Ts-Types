type Conditional<A, B, Resolved, Rejected> = [A] extends [B]
  ? Resolved
  : Rejected;

// (1|2)[] extends (1|2)[]
// [A] extends [B] && [B] extends [A]
// 保留联合类型子类型的判断能力
// 完全比较两个联合类型相等？

type StrictConditional<A, B, Resolved, Rejected, Fallback = never> = [
  A
] extends [B]
  ? [B] extends [A]
    ? Resolved
    : Rejected
  : Fallback;

export {};
