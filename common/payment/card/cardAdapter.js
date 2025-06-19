class TossPayAdapter extends Payment {
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
