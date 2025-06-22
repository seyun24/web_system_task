//결제 통합 인터페이스 
export class PaymentMethod {
  pay(amount) {
    throw new Error("pay() must be implemented");
  }

  getName() {}
}