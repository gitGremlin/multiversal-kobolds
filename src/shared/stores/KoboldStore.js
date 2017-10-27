import {observable, autorun, toJS} from "mobx";

class KoboldStore {
  // UI
  @observable koboldCounter;

  resetStore(){
    this.koboldCounter=0
  }
}

let store = new KoboldStore;
export default store;
