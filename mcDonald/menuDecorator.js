import { MenuDecorator } from "../common/menu/menuDecorator.js";

export class ExtraCheese extends MenuDecorator {
  getDescription() {
    return this.menuItem.getDescription() + " + 치즈";
  }

  getPrice() {
    return this.menuItem.getPrice() + 500;
  }
}

export class ExtraSauce extends MenuDecorator {
  getDescription() {
    return this.menuItem.getDescription() + " + 불고기 소스";
  }

  getPrice() {
    return this.menuItem.getPrice() + 500;
  }
}