import {observable} from 'mobx';

class KoboldGenerations {
  @observable list = {
    female: 4,
    wetnurse: 200,
    science: 100
  };
}

export default new KoboldGenerations;
