import { AbstractKiosk } from "../common/kiosk.js";
import { MenuItem } from "../common/menu/menuItem.js";
import { paymentStrategies } from "../common/payment/paymentStrategy.js";
import { StarbucksMenuFactory } from "./menuFactory.js";


export class StarbucksKiosk extends AbstractKiosk {
  constructor(saleStrategy, orderItem, menuOptions, paymentMethod) {
      super();
      this.saleStrategy = saleStrategy;
      this.orderItem = orderItem;
      this.menuOptions = menuOptions;
      this.paymentMethod = paymentMethod;
  }

  loadMenus() {
    this.menuFactory = new StarbucksMenuFactory();
    this.menuFactory.createMenus()
    this.setMenus(this.menuFactory.getMenus());
  }

  saleSetting() {
    this.saleStrategy.apply(this.menus);
  }

  takeOrder() {
    console.log("------------------------------------------------------------------------------------");
     console.log("메뉴를 리스트를 출력합니다. : ", this.menus);
     this.setOrderItems(this.menus[this.orderItem]);
     console.log("선택한 품목 :", this.orderedItems)
  }

  addOptions() {
    console.log("------------------------------------------------------------------------------------");
    console.log("추가 옵션을 선택합니다.");

    let options = this.orderedItems;

    this.menuOptions.forEach(o => {
      options = new o(options)
    });

    const menuItem = new MenuItem(options.getDescription(), options.getPrice());
    this.setOrderItems(menuItem);

    console.log("현재 주문:", menuItem);
  }

   selectPayment() {
    console.log("------------------------------------------------------------------------------------");
    const paymentList = paymentStrategies;
    console.log("결제 방식을 선택하세요: ",paymentList)

    this.setPayment(this.paymentMethod);
    console.log("선택한 결제방식: ",this.paymentMethod)
  }
}
