import {action} from 'mobx';

import store from '../stores/KoboldStore';

class KoboldActions {
  @action
  hatchKoboldManual() {
    if (store.getEggCount() > 0) {
      store.eggCount--;
      store.koboldCount++;
    }
  }

  @action
  hatchKoboldAutomatic(number) {
    const koboldsToHatch = Math.min(store.getEggCount(), number);
    store.koboldCount += koboldsToHatch;
    store.eggCount -= koboldsToHatch;
  }

  @action
  produceEgg(number) {
    store.eggCount += number;
  }

  @action
  produceKobold(number) {
    if (store.getEggCount() >=1) {
      store.breedingHatchProgress += number;
      if (store.getBreedingHatchProgress() >= 1) {
        let koboldsToHatch = Math.min(store.getEggCount(), Math.floor(store.getBreedingHatchProgress()));
        store.koboldCount += koboldsToHatch;
        store.eggCount -= koboldsToHatch;
        store.breedingHatchProgress -= koboldsToHatch;
      }
    }
  }

  @action
  modifyBreeding(type, number) {
    switch (type) {
      case 'male' :
        store.breedingMaleCount += number;
        break;
      case 'female' :
        store.breedingFemaleCount += number;
        break;
      case 'wetnurse' :
        store.breedingWetnurseCount += number;
        break;
    }
    store.koboldEmployedCount += number;
  }

  @action
  modifyRAD(type, number) {
    switch (type) {
      case 'scientist' :
        store.radScientistCount += number;
        break;
    }
    store.koboldEmployedCount += number;
  }
}

export default new KoboldActions;
