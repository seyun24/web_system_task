class MenuItem {
    
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
}