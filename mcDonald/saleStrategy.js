import { MenuItem } from "../common/menu/menuItem.js";
import { SaleStrategy } from "../common/sale/SaleStrategy.js";


//맥런치 판매
export class McLanchStrategy extends SaleStrategy {
  apply(menus) {
    menus.forEach(item => {
      item.price = Math.floor(item.price * 0.8);
    });
    console.log("20% 할인 적용됨");
  }
}


//맥모닝 판매
export class McMorningSaleStrategy extends SaleStrategy {
  apply(menus) {

    // 맥모닝 메뉴 추가
    menus.push(
      new MenuItem("에그 맥머핀", 3000),
      new MenuItem("소시지 맥머핀", 3500),
      new MenuItem("해시브라운", 1500)
    );

    console.log("맥모닝 메뉴 추가됨")
  }
}

//스태프 식사 판매
export class McStafSaleStrategy extends SaleStrategy {
  apply(menus) {
    menus.forEach(item => {
      item.price = 0;
    });
    console.log("스태프 식사 적용됨");
  }
}

