import { AbstractKiosk } from "../common/kiosk";

export class SubwayKiosk extends AbstractKiosk {
  loadMenus() {
    this.menuFactory = new SubwayMenuFactory();
    this.menus = this.menuFactory.createMenus();
  }
}