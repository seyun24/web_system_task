import { PaymentMethod } from "../paymentMethod.js";


//PaymentMetod 인터페이스로 통합된 토스페이 어댑터 클래스
export class TossPayAdapter extends PaymentMethod {
  constructor(toss) {
    super();
    this.toss = toss;
  }

  pay(amount) {
    this.toss.tossPay(amount);
  }

  getName() {
    return "TossPay";
  }
}