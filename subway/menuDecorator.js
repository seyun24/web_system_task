import { MenuDecorator } from "../common/menu/menuDecorator.js";

export class ExtraCheese extends MenuDecorator {
  getDescription() {
    return this.menuItem.getDescription() + " + 아메리칸 치즈";
  }

  getPrice() {
    return this.menuItem.getPrice() + 500;
  }
}

export class ExtraSauce extends MenuDecorator {
  getDescription() {
    return this.menuItem.getDescription() + " + 갈릭 디핑 소스";
  }

  getPrice() {
    return this.menuItem.getPrice() + 500;
  }
}

export class ExtraMeet extends MenuDecorator {
  getDescription() {
    return this.menuItem.getDescription() + " + 고기 추가";
  }

  getPrice() {
    return this.menuItem.getPrice() + 1500;
  }
}