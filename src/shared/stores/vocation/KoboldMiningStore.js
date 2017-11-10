import {observable} from 'mobx';

export default class KoboldMiningStore {

  @observable vocationCount = [0, 0];
  @observable goldPerTick = 0.0;
  @observable goldCount = [0, 20];
  @observable spacePerTick = 0.0;
  @observable spaceCount = 100;

  getVocationCount(int) {
    return this.vocationCount[int];
  }

  getGoldPerTick() {
    return this.goldPerTick;
  }

  getGoldCount(int) {
    return Math.floor(this.goldCount[int]);
  }

  getSpacePerTick() {
    return this.spacePerTick;
  }

  getSpaceCount() {
    return Math.floor(this.spaceCount);
  }
}
