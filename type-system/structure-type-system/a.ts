class Cat {
  eat() {}
}

class Dog {
  eat() {}
}

// 标称类型系统，名义类型系统

function feedCat(cat: Cat) {}

feedCat(new Dog());

interface Foo {
  prop: any;
}

// 如何判断一只鸟是鸭子？
// 走路、游泳、捕食

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

// a = b -> b < a
foo = baz;
bar = baz;

baz = foo;
baz = bar;

export {};
