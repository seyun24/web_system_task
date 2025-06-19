class McDonaldsKiosk extends AbstractKiosk {
  loadMenus() {
    this.menuFactory = new McDonaldsMenuFactory();
    this.menus = this.menuFactory.createMenus();
  }
}

class SubwayKiosk extends AbstractKiosk {
  loadMenus() {
    this.menuFactory = new SubwayMenuFactory();
    this.menus = this.menuFactory.createMenus();
  }
}