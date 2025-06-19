class Subject {
  constructor() {
    this.observers = [];
  }

  add(observer) {
    this.observers.push(observer);
  }

  notify(message) {
    this.observers.forEach(o => o.update(message));
  }
}

