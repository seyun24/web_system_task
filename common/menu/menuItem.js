//메뉴 품목 클래스
export class MenuItem {
    
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDescription() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }

  setDescription(name) {
    this.name = name;
  }
}