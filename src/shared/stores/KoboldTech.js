import {observable} from 'mobx';

class KoboldTech {
  @observable tree = {
    husbandry: {
      cost: 30
    },
    library: {
      cost: 50
    },
    koboldSage: {
      cost: 70
    },
    privateInvestigations: {
      cost: 80
    },
    ichorExtractors: {
      cost: 100
    },
  };
}

export default new KoboldTech;
