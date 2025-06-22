//키오스크 메뉴 팩토리 메소드 클래스
/*
  키오스크 마다 메뉴를 다르게 생성해야함
  - 햄버거 매장 (불고기 버거, 새우버거, 치킨 버거)
  - 라멘 매장 (돈코츠 라멘, 소유 라멘, 오레노 라멘)
  - 샌드위치 매장 (연어 샌드위치, 토마토 샌드위치, 햄샌드위치)
*/
export class MenuFactory {
  menus = [];
  
  //각 매장마다 다른 메뉴를 동일한 메소드에서 생성
  createMenus() {
    //추상 메소드를 명시적으로 사용하기 위해 throw를 추가
    throw new Error("createMenus must be implemented");
  }

  getMenus() {
    return this.menus;
  }

  _addMenu(menuItem) {
    this.menus.push(menuItem);
  }
}
