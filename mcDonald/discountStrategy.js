import { DiscountStrategy } from "../common/menu/discount/discountStrategy";

export class MacLanchStrategy extends DiscountStrategy {
  apply(menus) {
    menus.forEach(item => {
      item.price = Math.floor(item.price * 0.2);
    });
    console.log("20% 할인 적용됨");
  }
}

