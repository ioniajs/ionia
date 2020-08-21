import { observable, action } from "mobx";

export class GlobalStore {
  @observable
  state: any;

  @observable
  actions: any;

  @observable
  setGlobalState: any;

  @action
  setState(state: any) {
    this.state = state;
  }

  @action
  setActions(actions: any) {
    this.actions = actions;
    this.setGlobalState = actions.setGlobalState;
  }
}
