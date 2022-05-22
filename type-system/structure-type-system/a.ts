class Cat {
  eat() {}
}

class Dog {
  eat() {}
}

// Nominal Type System
// 名义类型系统

// 参数 & 返回值 的协变、逆变检查，
function feedCat(cat: Cat) {}

feedCat(new Dog());

interface Foo {
  prop: any;
}

interface Bar {
  prop: any;
}

interface Baz {
  prop: any;
  uniqueProp: any;
}

declare let foo: Foo;
declare let bar: Bar;
declare let baz: Baz;

foo = bar;
bar = foo;

foo = baz;
bar = baz;

baz = foo;
baz = bar;

export {};
