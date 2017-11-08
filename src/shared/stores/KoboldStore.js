import {observable} from 'mobx';
import Tech from './KoboldTech';
import Generation from './KoboldGenerations';
import Vocation from './KoboldVocations'

class KoboldStore {
  // Egg Control
  @observable eggsPerTick = 0.0;
  @observable eggCount = 100;

  // Kobold Control
  @observable koboldsPerTick = 0;
  @observable koboldCount = 0;
  @observable koboldEmployedCount = 0;
  @observable vocation = Vocation.list;

  // Breeding Control
  @observable breedingMaleCount = 0;
  @observable breedingFemaleCount = 0;
  @observable breedingWetnurseCount = 0;
  @observable breedingHatchProgress = 0;

  // RAD Control
  @observable radScientistCount = 0;
  @observable radScienceCount = [0, 100];
  @observable radSciencePerTick = 0;

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
        return this.breedingMaleCount;
        break;
      case 'female' :
        return this.breedingFemaleCount;
        break;
      case 'wetnurse' :
        return this.breedingWetnurseCount;
        break;
      case 'scientist' :
        return this.radScientistCount;
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
