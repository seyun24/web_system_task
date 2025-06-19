import { PaymentMethod } from "../payment";

export class CardAdapter extends PaymentMethod {
  constructor(card) {
    super();
    this.card = card;
  }

  pay(amount) {
    this.card.cardInsert(amount);
  }

  getName() {
    return "card";
  }
}
