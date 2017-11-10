import {observable} from 'mobx';

export default class KoboldBreedingStore {

  @observable vocationCount = [0, 0, 0];
  @observable hatchProgress = 0;

  getVocationCount(int) {
    return this.vocationCount[int];
  }

  getHatchProgress() {
    return this.hatchProgress
  }
}
