import { MenuFactory } from "../common/menu/menuFactory.js";
import { MenuItem } from "../common/menu/menuItem.js";


export class SubwayMenuFactory extends MenuFactory {
  createMenus() {
    this._addMenu(new MenuItem("에그마요", 4800));
    this._addMenu(new MenuItem("BLT", 5000));
    this._addMenu(new MenuItem("쿠키", 1200));
  }
}