import {observable} from 'mobx';

export default class KoboldTechStore {

  @observable enableResearch = false;
  @observable enableTooltips = false;
  @observable list = {
    husbandry: {
      name: 'Kobold Husbandry',
      description: 'Improves the ratio of males-to-females required for optimal breeding',
      cost: 30,
      researched: false,
      available: false,
      prereq: '',
    },
    library: {
      name: 'Library Vault',
      description: 'We will be able to view previously researched technology',
      cost: 50,
      researched: false,
      available: false,
      prereq: '',
    },
    privateInvestigations: {
      name: 'Private Investigations',
      description: 'Lets us view tooltips on everything',
      cost: 80,
      researched: false,
      available: false,
      prereq: '',
    },
    ichorStorage: {
      name: 'Ichor Storage',
      description: 'Construction of Ichor Storage will be available',
      cost: 100,
      researched: false,
      available: false,
      prereq: '',
    },
    recordKeeping: {
      name: 'Record Keeping',
      description: 'Allows us to manually save the game, whatever that means',
      cost: 300,
      researched: false,
      available: false,
      prereq: 'library',
    }
  };

  getName(tech) {
    return this.list[tech].name;
  }

  getDescription(tech) {
    return this.list[tech].description;
  }

  getCost(tech) {
    return this.list[tech].cost;
  }

  getResearched(tech) {
    return this.list[tech].researched;
  }

  getAvailable(tech) {
    return this.list[tech].available;
  }

  getPrereq(tech) {
    return this.list[tech].prereq;
  }

  getEnableResearch() {
    return this.enableResearch;
  }

  getEnableTooltips() {
    return this.enableTooltips;
  }

  getDefaultTooltip() {

  }
}
