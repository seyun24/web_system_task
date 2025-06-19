export class MenuDecorator extends MenuItem {
  constructor(menuItem) {
    super(menuItem.name, menuItem.price);
    this.menuItem = menuItem;
  }
}

class ExtraSauce extends MenuDecorator {
  getDescription() {
    return this.menuItem.getDescription() + " + 소스";
  }

  getPrice() {
    return this.menuItem.getPrice() + 500;
  }
}

class ExtraCheese extends MenuDecorator {
  getDescription() {
    return this.menuItem.getDescription() + " + 치즈";
  }

  getPrice() {
    return this.menuItem.getPrice() + 500;
  }
}
