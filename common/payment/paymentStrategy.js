import {
  Card, CardAdapter,
  NaverPay, NaverPayAdapter,
  TossPay, TossPayAdapter
} from "./index.js"; 

export const paymentStrategies = [
  new CardAdapter(new Card()),
  new NaverPayAdapter(new NaverPay()),
  new TossPayAdapter(new TossPay())
];