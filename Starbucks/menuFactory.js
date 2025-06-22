import { MenuFactory } from "../common/menu/menuFactory.js";
import { MenuItem } from "../common/menu/menuItem.js";

export class StarbucksMenuFactory extends MenuFactory {
  createMenus() {
    this._addMenu(new MenuItem("아메리카노", 4500));
    this._addMenu(new MenuItem("녹차", 5500));
    this._addMenu(new MenuItem("아이스티", 5000))
  }
}