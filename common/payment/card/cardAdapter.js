import { PaymentMethod } from "../paymentMethod.js";

//PaymentMetod 인터페이스로 통합된 카드결제 어댑터 클래스
export class CardAdapter extends PaymentMethod {
  constructor(card) {
    super();
    this.card = card;
  }

  pay(amount) {
    this.card.payWithCard(amount);
  }

  getName() {
    return "card";
  }
}
