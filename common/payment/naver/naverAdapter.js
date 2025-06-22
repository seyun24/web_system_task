import { PaymentMethod } from "../paymentMethod.js";

//PaymentMetod 인터페이스로 통합된 네이버페이 어댑터 클래스
export class NaverPayAdapter extends PaymentMethod {
  constructor(np) {
    super();
    this.np = np;
  }

  pay(amount) {
    this.np.naverPay(amount);
  }

  getName() {
    return "NaverPay";
  }
}