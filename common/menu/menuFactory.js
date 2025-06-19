export class MenuFactory {
  #menus = [];
  
  createMenus() {
    throw new Error("createMenus must be implemented");
  }

  getMenus() {
    return this.#menus;
  }

  _addMenu(menuItem) {
    this.#menus.push(menuItem);
  }
}
