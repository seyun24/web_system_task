class KioskTemplate {
  start() {
    this.showIntro();
    this.displayMenu();
    this.selectMenu();  
    this.checkout();
    this.finish();
  }

  showIntro() {
    console.log("🔔 키오스크를 시작합니다.");
  }

  displayMenu() {
    
  }

  selectMenu() {
    console.log("🧾 메뉴를 선택합니다.");
  }

  checkout() {
    console.log("🧾 주문 완료 처리 중...");
  }

  finish() {
    console.log("✅ 이용해주셔서 감사합니다.");
  }
}





