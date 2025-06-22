//키오스크 주변기기 옵저버 클래스
export class DeviceSubject {

  constructor() {
    this.observers = [];
  }

  //observers 배열에 추가
  add(observer) {
    this.observers.push(observer);
  }

  //등록된 observers 배열을 순회하여 각요소에 동작을 실행
  notify(message) {
    this.observers.forEach(o => o.update(message));
  }
}

