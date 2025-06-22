import { MenuDecorator } from "../common/menu/menuDecorator.js";

export class ExtraShot extends MenuDecorator {
  getDescription() {
    return this.menuItem.getDescription() + " + 샷추가";
  }

  getPrice() {
    return this.menuItem.getPrice() + 500;
  }
}

export class ExtraSyrup extends MenuDecorator {
  getDescription() {
    return this.menuItem.getDescription() + " + 시럽추가";
  }

  getPrice() {
    return this.menuItem.getPrice() + 500;
  }
}

export class ExtraHoney extends MenuDecorator {
  getDescription() {
    return this.menuItem.getDescription() + " + 꿀추가";
  }

  getPrice() {
    return this.menuItem.getPrice() + 500;
  }
}