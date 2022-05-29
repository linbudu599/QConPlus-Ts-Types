type USD = number;
type CNY = number;

// 为类型附加额外信息

const CNYCount: CNY = 200;
const USDCount: USD = 200;

function addCNY(source: CNY, input: CNY) {
  return source + input;
}

addCNY(CNYCount, USDCount);

export {};
