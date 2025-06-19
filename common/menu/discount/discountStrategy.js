export class DiscountStrategy {
  apply(menus) {} 
}


export class NoDiscountStrategy extends DiscountStrategy {
  apply(menus) {
    console.log("할인 없음");
  }
}

