import {observable} from 'mobx';

class KoboldStore {
  // Stage One Kobolds
  @observable koboldCounter = 0;
  @observable eggCounter = 10;

  getKoboldCount() {
    return this.koboldCounter
  }
  getEggCount() {
    return this.eggCounter
  }
}

export default new KoboldStore;
