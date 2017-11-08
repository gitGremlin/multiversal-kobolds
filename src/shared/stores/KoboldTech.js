import {observable} from 'mobx';

class KoboldTech {
  @observable list = {
    husbandry: {
      name: 'Kobold Husbandry',
      description: 'improves the ratio of males-to-females required for optimal breeding',
      cost: 30,
      prereq: '',
    },
    library: {
      name: 'Library Vault',
      description: 'we will be able to view previously researched technology',
      cost: 50,
      prereq: '',
    },
    privateInvestigations: {
      name: 'Private Investigations',
      description: 'lets us view tooltips on everything, yip yip!',
      cost: 80,
      prereq: '',
    },
    ichorStorage: {
      name: 'Ichor Storage',
      description: 'construction of Ichor Storage will be available!',
      cost: 100,
      prereq: '',
    },
    recordKeeping: {
      name: 'Record Keeping',
      description: 'allows us to manually save the game, whatever that means...',
      cost: 300,
      prereq: 'library',
    }
  };
}

export default new KoboldTech;
