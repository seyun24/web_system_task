class NaverPayAdapter extends Payment {
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