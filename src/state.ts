const state = {
  data: {
    list: [],
  },
  listeners: [],
  init() {
    // Busco data existente en el localStorage
    const localData = JSON.parse(localStorage.getItem("data"));

    if (!localData) {
      // Si no hay data, que no haga nada
      return;
    }
    // Pero si la hay, que la setee en el estado
    this.setState(localData);
  },
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      // console.log("SOy yo", cb);
      cb();
    }
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  addItem(item: string) {
    //currentState = cs
    const cs = this.getState();
    cs.list.push(item);
    this.setState(cs);
    console.log(state.getState());
  },
};
export { state };
