//판매 전략 클래스
export class SaleStrategy {
  apply(menus) {} 
}


//기본 판매
export class DefaultSaleStrategy extends SaleStrategy {
  apply(menus) {
    console.log("판매 변경 없음");
  }
}

