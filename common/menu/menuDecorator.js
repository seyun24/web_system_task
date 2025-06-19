class MenuDecorator extends MenuItem {
  constructor(menuItem) {
    super(menuItem.name, menuItem.price);
    this.menuItem = menuItem;
  }
}