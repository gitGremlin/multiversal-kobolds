import {observable} from 'mobx';

export default class KoboldRADStore {

  @observable vocationCount = [0];
  @observable ichorPerTick = 0;
  @observable ichorCount = [0, 100];

  getVocationCount(int) {
    return this.vocationCount[int];
  }

  getIchorPerTick() {
    return this.ichorPerTick;
  }

  getIchorCount(int) {
    return Math.floor(this.ichorCount[int]);
  }
}
