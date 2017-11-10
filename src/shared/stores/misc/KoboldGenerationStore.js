import {observable} from 'mobx';

export default class KoboldGenerationStore {

  @observable list = {
    female: 4,
    wetnurse: 200,
    science: 100,
    gold: 600,
    space: 400,
  };

  getRate(type) {
    return this.list[type]
  }
}
