// Top Type
// 所有类型都是它的子类型
let anyVar: any = 'linbudu';

// a = b, b < a
anyVar = false;
anyVar = 'linbudu';
anyVar = {
  site: 'qconplus',
};

anyVar = () => {};

// Bottom Type
// 它是所有类型的子类型
// val = anyVar
// any 是一个身化万千的变量

// 1 和 0 没有交集，不存在一个类型同时满足 1 和 0
// IsAny
type Res = 1 & any;

const val1: string = anyVar;
const val2: number = anyVar;
const val3: () => {} = anyVar;
const val4: {} = anyVar;

// any 具有传染性
anyVar.foo.bar.baz();
anyVar[0][1][2].prop1;

export {};
