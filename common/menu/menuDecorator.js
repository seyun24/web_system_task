import { MenuItem } from "./menuItem.js";

//추가주문 데코레이터 클래스
export class MenuDecorator extends MenuItem {
  constructor(menuItem) {
    super(menuItem.name, menuItem.price);
    this.menuItem = menuItem;
  }
}


