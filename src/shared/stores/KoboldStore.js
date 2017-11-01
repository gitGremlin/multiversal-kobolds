import {observable} from 'mobx';

class KoboldStore {
  // Egg Control
  @observable eggsPerTick = 0.0;
  @observable eggCount = 10;

  // Kobold Control
  @observable koboldCount = 0;
  @observable koboldEmployedCount = 0;

  // Vocation Control
  @observable breedingTime = false;

  // Breeding Control
  @observable breedingMaleCount = 0;
  @observable breedingFemaleCount = 0;

  getEggsPerTick() {
    return this.eggsPerTick;
  }

  getEggCount() {
    return Math.floor(this.eggCount);
  }

  getKoboldCount() {
    return this.koboldCount;
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
}

export default new KoboldStore;
