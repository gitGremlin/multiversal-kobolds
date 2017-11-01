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
  modifyBreedingMale(number) {
    store.breedingMaleCount += number;
    store.koboldEmployedCount += number;
  }

  @action
  modifyBreedingFemale(number) {
    store.breedingFemaleCount += number;
    store.koboldEmployedCount += number;
  }
}

export default new KoboldActions;
