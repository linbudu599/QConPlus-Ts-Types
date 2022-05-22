class Cat {
  eat() {}
}

class Dog {
  eat() {}
  bark() {}
}

function feedCat(cat: Cat) {}

feedCat(new Dog());

export {};
