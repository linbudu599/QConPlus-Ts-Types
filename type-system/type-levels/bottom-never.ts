// void null undefined
// != JavaScript 中的概念
// 作为类型存在，都是合法的，有具体意义的类型
// never 类型：虚无类型，表示不存在的类型

// 不会返回！
// return
function justThrow(): never {
  throw new Error();
}

// 类型控制流分析
function foo(input: number) {
  if (input > 1) {
    justThrow();
    // 等同于 return 语句后的代码，即 Dead Code
    const name = 'linbudu';
  }
}

declare let input: string | number | boolean | (() => {}) | never;

// 类型保护，instanceof、可辨识联合类型等
if (typeof input === 'string') {
  console.log('str!');
} else if (typeof input === 'number') {
  console.log('num!');
} else if (typeof input === 'boolean') {
  console.log('bool!');
} else {
  // never类型只能赋值给never类型变量
  const _exhaustiveCheck: never = input;
  // 运行时去抛出错误
  throw new Error(`Unknown input type: ${input}`);
}

export {};
