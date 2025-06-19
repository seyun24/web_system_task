import { PaymentMethod } from "../payment";

class TossPayAdapter extends PaymentMethod {
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