class Cat {
  eat() {}
}

class Dog {
  eat() {}
}

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
