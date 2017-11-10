import {observable, action} from 'mobx';

import Egg from './control/KoboldEggStore';
import Kobold from './control/KoboldControlStore';

import Vocation from './vocation/KoboldVocationStore';
import Breeding from './vocation/KoboldBreedingStore';
import RAD from './vocation/KoboldRADStore';
import Mining from './vocation/KoboldMiningStore';
import Farming from './vocation/KoboldFarmingStore';
import Fabrication from './vocation/KoboldFabricationStore';

import Tech from './misc/KoboldTechStore';
import Generation from './misc/KoboldGenerationStore';

class KoboldStore {
  constructor() {
    this.reset();
  }

  reset() {
    console.log('store load time');

    this.egg = new Egg;
    this.kobold = new Kobold;

    this.vocation = new Vocation;
    this.breeding = new Breeding;
    this.rad = new RAD;
    this.mining = new Mining;
    this.farming = new Farming;
    this.fabrication = new Fabrication;

    this.tech = new Tech;
    this.generation = new Generation;
  }

  // Kobold Control
  @observable egg;
  @observable kobold;

  // Vocation Control
  @observable vocation;
  @observable breeding;
  @observable rad;
  @observable mining;
  @observable farming;
  @observable fabrication;

  // Misc Control
  @observable generation;

  // Tech Tree
  @observable tech;
  @observable enableResearch = false;
  @observable enableTooltips = false;

  getVocationCount(type) {
    switch (type) {
      case 'male' :
        return this.breeding.getVocationCount(0);
        break;
      case 'female' :
        return this.breeding.getVocationCount(1);
        break;
      case 'wetnurse' :
        return this.breeding.getVocationCount(2);
        break;
      case 'scientist' :
        return this.rad.getVocationCount(0);
        break;
      case 'miner' :
        return this.mining.getVocationCount(0);
        break;
      case 'tunneler' :
        return this.mining.getVocationCount(1);
        break;
    }
  }
}

const store = new KoboldStore();                      // Normal Mode
// const store = window.store = new KoboldStore();     // Debug Mode

export default store;
