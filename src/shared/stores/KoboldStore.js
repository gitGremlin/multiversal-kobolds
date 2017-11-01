import {observable} from 'mobx';

class KoboldStore {
  // Egg Control
  @observable eggsPerTick = 0.2;
  @observable eggCount = 10;

  // Kobold Control
  @observable koboldCount = 0;

  getEggsPerTick() {
    return this.eggsPerTick;
  }

  getEggCount() {
    return Math.floor(this.eggCount)
  }

  getKoboldCount() {
    return this.koboldCount
  }
}

export default new KoboldStore;
