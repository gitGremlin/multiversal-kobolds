import {observable} from 'mobx';

export default class KoboldControlStore {

  @observable perTick = 0.0;
  @observable count = 0;
  @observable employedCount = 0;

  getPerTick() {
    return this.perTick;
  }

  getCount() {
    return Math.floor(this.count);
  }

  getEmployedCount() {
    return this.employedCount;
  }

}
