import {observable} from 'mobx';
import Tech from './KoboldTech';
import Generation from './KoboldGenerations';
import Vocation from './KoboldVocations'

class KoboldStore {
  // Egg Control
  @observable eggsPerTick = 0.0;
  @observable eggCount = 100;

  // Kobold Control
  @observable koboldsPerTick = 0.0;
  @observable koboldCount = 0;
  @observable koboldEmployedCount = 0;
  @observable vocation = Vocation.list;

  // Breeding Control
  @observable breedingVocationCount = [0, 0, 300];
  @observable breedingHatchProgress = 0;

  // RAD Control
  @observable radVocationCount = [0];
  @observable radScienceCount = [0, 100];
  @observable radSciencePerTick = 0;

  // Mining Control
  @observable miningVocationCount = [0, 0];
  @observable miningGoldCount = [0, 20];
  @observable miningGoldPerTick = 0.0;
  @observable miningSpaceCount = 100;
  @observable miningSpaceAvailable = true;
  @observable miningSpacePerTick = 0.0;

  // Farming Control
  @observable farmingVocationCount = [0, 0];
  @observable farmingCatCount = 0;
  @observable farmingCatsPerTick = 0.0;
  @observable farmingSlaughterPerTick = 0.0;
  @observable farmingMeatCount = 0;
  @observable farmingSkinCount = 0;

  // Fabrication Control
  @observable fabricationLeatherCount = 0;
  @observable fabricationLeatherPerTick = 0.0;
  @observable fabricationTrenchcoatCount = 0;
  @observable fabricationTrenchcoatPerTick = 0.0;

  // Tech Tree
  @observable techTree = Tech.list;
  @observable enableResearch = false;
  @observable enableTooltips = false;

  // Generation Rates
  @observable generation = Generation.list;

  getEggsPerTick() {
    return this.eggsPerTick;
  }

  getKoboldsPerTick() {
    return this.koboldsPerTick;
  }

  getEggCount() {
    return Math.floor(this.eggCount);
  }

  getKoboldCount() {
    return Math.floor(this.koboldCount);
  }

  getKoboldEmployedCount() {
    return this.koboldEmployedCount;
  }

  getGenerationRate(type) {
    return this.generation[type];
  }

  getBreedingHatchProgress() {
    return this.breedingHatchProgress;
  }

  getVocationCount(type) {
    switch (type) {
      case 'male' :
        return this.breedingVocationCount[0];
        break;
      case 'female' :
        return this.breedingVocationCount[1];
        break;
      case 'wetnurse' :
        return this.breedingVocationCount[2];
        break;
      case 'scientist' :
        return this.radVocationCount[0];
        break;
      case 'miner' :
        return this.miningVocationCount[0];
        break;
      case 'tunneler' :
        return this.miningVocationCount[1];
        break;
    }
  }

  getRADScienceCount(int) {
    return Math.floor(this.radScienceCount[int]);
  }

  getRADSciencePerTick() {
    return this.radSciencePerTick;
  }

  getTechCost(tech) {
    return this.techTree[tech].cost;
  }

  getTechResearched(tech) {
    return this.techTree[tech].researched;
  }

  getGoldCount(int) {
    return Math.floor(this.miningGoldCount[int]);
  }

  getGoldPerTick() {
    return this.miningGoldPerTick;
  }

  getMiningSpaceCount() {
    return Math.floor(this.miningSpaceCount);
  }

  getMiningSpacePerTick() {
    return this.miningSpacePerTick;
  }

  getEnableResearch() {
    return this.enableResearch;
  }

  getEnableTooltips() {
    return this.enableTooltips;
  }
}

export default new KoboldStore

// Debug Mode:
const store = window.store = new KoboldStore();
// export default store
