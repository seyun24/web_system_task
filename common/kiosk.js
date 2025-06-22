import { DeviceSubject } from "./device/DeviceSubject.js";

export class AbstractKiosk {
  constructor() {
    this.menuFactory;
    this.menus = [];
    this.orderedItems;
    this.observer = new DeviceSubject();
    this.payment;
  }

  start() {
    this.loadMenus();
    this.saleSetting();
    this.takeOrder();
    this.addOptions();
    this.selectPayment();
    this.processPayment();
    this.finishOrder();
  }


  loadMenus() {
    throw new Error("loadMenus() must be implemented");
  }

  saleSetting() {
    throw new Error("saleSetting() must be implemented");
  }

  takeOrder() {
    throw new Error("takeOrder() must be implemented");
  }

  addOptions() {
    throw new Error("addOptions() must be implemented");
  }

  selectPayment() {
    throw new Error("selectPayment() must be implemented");
  }

  processPayment() {
    const total = this.orderedItems.getPrice();
    this.payment.pay(total);
  }

  finishOrder() {
    console.log("------------------------------------------------------------------------------------");
    console.log("주문 상세 내역:", this.orderedItems);
    console.log("결제 수단:", this.payment);
    console.log("------------------------------------------------------------------------------------");
    this.observer.notify(this.orderedItems);
  }

  setMenus(menus) {
    this.menus = menus;
  }

  setOrderItems(item) {
    this.orderedItems = item;
  }

  setPayment(payment) {
    this.payment = payment;
  }
}