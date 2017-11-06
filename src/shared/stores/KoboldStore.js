import {observable} from 'mobx';

class KoboldStore {
  // Egg Control
  @observable eggsPerTick = 0.0;
  @observable eggCount = 100;

  // Kobold Control
  @observable koboldsPerTick = 0;
  @observable koboldCount = 0;
  @observable koboldEmployedCount = 0;

  // Vocation Control
  @observable breedingTime = false;
  @observable scienceTime = false;

  // Breeding Control
  @observable breedingMaleCount = 0;
  @observable breedingFemaleCount = 0;
  @observable breedingWetnurseCount = 0;
  @observable breedingHatchProgress = 0;

  // Thinking Control
  @observable thinkingScientistCount = 0;
  @observable thinkingWizardCount = 0;

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

  getVocationTime(type) {
    switch (type) {
      case 'breeding' :
        return this.breedingTime;
        break;
      case 'science' :
        return this.scienceTime;
        break;
    }
  }

  getBreedingCount(type) {
    switch (type) {
      case ('male') :
        return this.breedingMaleCount;
        break;
      case ('female') :
        return this.breedingFemaleCount;
        break;
      case ('wetnurse') :
        return this.breedingWetnurseCount;
        break;
    }
  }

  getBreedingHatchProgress() {
    return this.breedingHatchProgress;
  }

  getThinkingCount(type) {
    switch (type) {
      case 'scientist' :
        return this.thinkingScientistCount;
        break;
      case 'wizard' :
        return this.thinkingWizardCount;
        break;
    }
  }
}

export default new KoboldStore;
