type Conditional<A, B, Resolved, Rejected> = [A] extends [B]
  ? Resolved
  : Rejected;

// (1|2)[] (1|2|3)[]

// 1|2

// 1 1|2 1|2

type StrictConditional<A, B, Resolved, Rejected, Fallback = never> = [
  A
] extends [B]
  ? [B] extends [A]
    ? Resolved
    : Rejected
  : Fallback;

export {};
