import {observable} from 'mobx';

export default class KoboldEggStore {

  @observable perTick = 0.0;
  @observable count = 100;

  getPerTick() {
    return this.perTick;
  }

  getCount() {
    return Math.floor(this.count);
  }
}
