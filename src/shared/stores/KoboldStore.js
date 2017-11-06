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

  // Breeding Control
  @observable breedingMaleCount = 0;
  @observable breedingFemaleCount = 0;
  @observable breedingWetnurseCount = 0;
  @observable breedingHatchProgress = 0;

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

  getBreedingTime() {
    return this.breedingTime;
  }

  getBreedingMaleCount() {
    return this.breedingMaleCount;
  }

  getBreedingFemaleCount() {
    return this.breedingFemaleCount;
  }
  getBreedingWetnurseCount() {
    return this.breedingWetnurseCount;
  }
  getBreedingHatchProgress() {
    return this.breedingHatchProgress}
}

export default new KoboldStore;
