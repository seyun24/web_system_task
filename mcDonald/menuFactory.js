class McDonaldsMenuFactory extends MenuFactory {
  createMenus() {
    this._addMenu(new MenuItem("빅맥", 4500));
    this._addMenu(new MenuItem("스낵랩", 3000));
    this._addMenu(new MenuItem("치즈스틱", 2000))
  }
}