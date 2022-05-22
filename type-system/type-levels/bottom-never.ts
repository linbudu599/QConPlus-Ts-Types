// void null
// 有效的类型值 void null undefined - string {}
// 什么都没有！
function justThrow(): never {
  throw new Error();
}

function foo(input: number) {
  if (input > 1) {
    justThrow();
    // 等同于 return 语句后的代码，即 Dead Code
    const name = 'linbudu';
  }
}

export {};
