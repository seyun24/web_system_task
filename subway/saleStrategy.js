import { MenuItem } from "../common/menu/menuItem.js";
import { SaleStrategy } from "../common/sale/SaleStrategy.js";


//특별 할인 판매
export class SubwayHalfStrategy extends SaleStrategy {
  apply(menus) {
    menus.forEach(item => {
      item.price = Math.floor(item.price * 0.5);
    });
    console.log("50% 할인 적용됨");
  }
}


//시즌 메뉴 판매
export class SubwaySeasonSaleStrategy extends SaleStrategy {
  apply(menus) {

    // 시즌 메뉴 추가
    menus.push(
      new MenuItem("콘수프", 3000),
      new MenuItem("안성재 비프", 3500),
    );

    console.log("시즌 메뉴 추가됨")
  }
}

//스태프 식사 판매
export class SubwayStafSaleStrategy extends SaleStrategy {
  apply(menus) {
    menus.forEach(item => {
      item.price = 100;
    });
    console.log("스태프 식사 적용됨");
  }
}

