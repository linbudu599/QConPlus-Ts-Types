class Cat {
  eat(): boolean {
    return true;
  }
}

class Dog {
  eat(): number {
    return 599;
  }
}

function feedCat(cat: Cat) {}

// 报错！
// @ts-expect-error
feedCat(new Dog());

export {};
