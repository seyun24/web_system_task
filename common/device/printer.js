//키오스크 기기에 부착된 주문번호 출력용 프린터 (주문번호 확인용)
export class Printer {
  
  //프린터 용지 양식에 맞게 출력
  update(msg) {
    console.log("<<!주문 확인용 프린터 출력", msg, ">>\n")
  }
}