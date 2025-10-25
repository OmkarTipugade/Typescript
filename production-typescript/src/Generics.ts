const score: Array<number> = [];
const names: Array<string> = [];

function indentityOne(val: boolean | number): boolean | number {
  return val;
}

function indentityTwo(val: any): any {
  return val;
}

function indentityThree<T>(val: T): T {
  return val;
}

// indentityThree(9)
// indentityThree(true)
// indentityThree("Three")

interface Bootle {
  brand: string;
  type: number;
}

indentityThree<Bootle>({
  brand: "camel",
  type: 6,
});

function storeProducts<T>(products: T[]): T | undefined {
  const myId = 5;
  return products[myId];
}

const  filterProducts = <Type,>(products:Type[]) :Type[] => {
    const filteredProducts: Type[] = []
    return filteredProducts
}