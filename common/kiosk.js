import { NoDiscountStrategy } from "./menu/discount/discountStrategy";
import { paymentStrategies } from "./payment/paymentStrategy";

export class AbstractKiosk {
  constructor() {
    this.menuFactory;
    this.menus = [];
    this.orderedItems = [];
    this.observer = new Subject();
    this.payment;
    this.paymentMethod = paymentStrategies;
    this.discountStrategy = new NoDiscountStrategy();
  }

  start() {
    this.loadMenus();
    this.takeOrder();
    this.addOptions();
    this.selectPayment();
    this.processPayment();
    this.finishOrder();
  }

  loadMenus() {
    throw new Error("loadMenus() must be implemented");
  }

  takeOrder() {
    console.log("메뉴 리스트:");
    this.menus.forEach((item, idx) =>
      console.log(`${idx + 1}. ${item.getDescription()} (${item.getPrice()}원)`)
    );

    const input = readline.question("주문할 번호들 (예: 1,2): ");
    const indexes = input.split(",").map(i => parseInt(i.trim()) - 1);
    this.orderedItems = indexes.map(i => this.menus[i]);
  }

  addOptions() {
    console.log("옵션을 선택하겠습니까?")
  }

  selectPayment() {
    console.log("결제 수단을 선택하세요")
    if(this.paymentMethod.length == 0) {
        this.paymentMethod = new CardAdapter(new Card());
    } 
  }

  processPayment() {
    const total = this.orderedItems.reduce((sum, i) => sum + i.getPrice(), 0);
    if (!this.payment) {
      console.log("결제 수단이 설정되지 않았습니다.");
      return;
    }
    this.payment.pay(total);
  }

  finishOrder() {
    console.log("주문 상세 내역:");
    console.log("결제 수단:");
    this.observer.notify("주문이 완료되어 조리 요청이 전송되었습니다.");
  }
}