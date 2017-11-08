import {observable} from 'mobx';

class KoboldTech {
  @observable tree = {
    husbandry: {
      name: 'Kobold Husbandry',
      description: '',
      cost: 30
    },
    library: {
      name: 'Library Vault',
      description: '',
      cost: 50
    },
    koboldSage: {
      name: 'Kobold Sage',
      description: '',
      cost: 70
    },
    privateInvestigations: {
      name: 'Private Investigations',
      description: '',
      cost: 80
    },
    ichorStorage: {
      name: 'Ichor Storage',
      description: '',
      cost: 100
    },
  };
}

export default new KoboldTech;
