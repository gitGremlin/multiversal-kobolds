import {action} from 'mobx';

import store from '../stores/KoboldStore';
import tech from './KoboldTechActions';

class KoboldActions {
  @action
  hatchKoboldManual() {
    if (store.getEggCount() > 0 && store.miningSpaceCount > 0) {
      store.eggCount--;
      store.miningSpaceCount --;
      store.koboldCount++;
    }
  }

  @action
  hatchKoboldAutomatic(number) {
    const koboldsToHatch = Math.min(store.getEggCount(), store.getMiningSpaceCount(), number);
    store.koboldCount += koboldsToHatch;
    store.eggCount -= koboldsToHatch;
    store.miningSpaceCount -= koboldsToHatch;
  }

  @action
  produceEgg(number) {
    store.eggCount += number;
  }

  @action
  produceKobold(number) {
    if (store.getEggCount() >= 1 && store.miningSpaceAvailable) {
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
  produceScience(number) {
    if (store.getRADScienceCount(0) < store.getRADScienceCount(1)) {
      const min = store.getRADScienceCount(1) - store.getRADScienceCount(0);
      store.radScienceCount[0] += Math.min(number, min);
    }

  }

  @action
  produceGold(number) {
    if (store.getGoldCount(0) < store.getGoldCount(1)) {
      const min = store.getGoldCount(1) - store.getGoldCount(0);
      store.miningGoldCount[0] += Math.min(number, min);
    }
  }

  @action
  produceSpace(number) {
    if (store.eggCount > 0) {
      number -= store.getKoboldsPerTick();
    }

    if (store.getMiningSpaceCount() >= 0 && store.getEggCount() >= 0) {
      const min = store.getMiningSpaceCount() + number;
      store.miningSpaceCount += Math.min(number, min);
    }
    if (store.getMiningSpaceCount() < 0) store.miningSpaceCount = 0;
  }

  @action
  modifyVocation(type, number) {
    switch (type) {
      case 'male' :
        store.breedingVocationCount[0] += number;
        break;
      case 'female' :
        store.breedingVocationCount[1] += number;
        break;
      case 'wetnurse' :
        store.breedingVocationCount[2] += number;
        break;
      case 'scientist' :
        store.radVocationCount[0] += number;
        break;
      case 'miner' :
        store.miningVocationCount[0] += number;
        break;
      case 'tunneler' :
        store.miningVocationCount[1] += number;
        break;
    }
    store.koboldEmployedCount += number;
  }

  @action
  researchTech(name) {
    tech.research(name);
    store.radScienceCount[0] -= store.getTechCost(name);
    store.techTree[name].researched = true;
  }
}

export default new KoboldActions;
