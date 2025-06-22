import { MenuItem } from "../common/menu/menuItem.js";
import { SaleStrategy } from "../common/sale/SaleStrategy.js";


//10프로 특별할인 데이
export class StarbucksSpcialDayStrategy extends SaleStrategy {
  apply(menus) {
    menus.forEach(item => {
      item.price = Math.floor(item.price * 0.9);
    });
    console.log("10% 할인 적용됨");
  }
}


//갓 구운빵 추가
export class StarbucksBreadSaleStrategy extends SaleStrategy {
  apply(menus) {

    menus.push(
      new MenuItem("머핀", 3000),
      new MenuItem("에그 타르트", 2500),
    );

    console.log("빵 메뉴 추가됨")
  }
}

//스태프 식사 판매
export class StarbucksStafSaleStrategy extends SaleStrategy {
  apply(menus) {
    menus.forEach(item => {
      item.price = 1000;
    });
    console.log("스태프 식사 적용됨");
  }
}

