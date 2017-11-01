import {observable} from 'mobx';

class KoboldStore {
  // Egg Control
  @observable eggsPerSecond = 0.2;
  @observable eggCount = 10;

  // Kobold Control
  @observable koboldCount = 0;

  getEggsPerSecond() {
    return this.eggsPerSecond;
  }

  getEggCount() {
    return Math.floor(this.eggCount)
  }

  getKoboldCount() {
    return this.koboldCount
  }
}

export default new KoboldStore;
