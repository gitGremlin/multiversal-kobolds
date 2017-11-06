import {observable} from 'mobx';

class KoboldTech {
  @observable tree = {
    husbandry: {
      cost: 30
    },
    ichorExtractors: {
      cost: 100
    }
  };
}

export default new KoboldTech;
