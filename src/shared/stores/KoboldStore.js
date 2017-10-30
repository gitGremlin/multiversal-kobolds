import {observable} from 'mobx';

class KoboldStore {
  // UI
  @observable koboldCounter = 0;

  resetStore(){
    this.koboldCounter=0
  }

  retrieveKoboldCount() {
    return this.koboldCounter
  }
}

export default new KoboldStore;
