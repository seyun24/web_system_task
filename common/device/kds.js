//Kitchen display system (주방 주문 확인 , 조리완료 확인 모니터)
export class Kds {

  //주문 호출시 조리할 품목을 정리하여 보여줌
  update(msg) {
    console.log("<<!KDS 주문상세 내역을 종합해 화면정보를 갱신합니다.", msg, ">>\n");
  }
}
