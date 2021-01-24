export class ProductBase {
  constructor(
    public id: number,
    public name: string) {
  }
}

export class Product extends ProductBase {
  constructor(
    id: number,
    name: string,
    public price: number
  ) {
    super(id, name);
  }
}

export class ProductFull extends Product {
  constructor(
    id: number, name: string, price: number, public description: string
  ) {
    super(id, name, price);
  }
}


