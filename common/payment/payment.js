export class Payment {
  pay(amount) {
    throw new Error("pay() must be implemented");
  }

  getName() {
    return this.constructor.name;
  }
}