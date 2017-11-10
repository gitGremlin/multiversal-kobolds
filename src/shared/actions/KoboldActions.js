import {action} from 'mobx';

import store from '../stores/KoboldStore';
import tech from './KoboldTechActions';

class KoboldActions {
  @action
  hatchKoboldManual() {
    if (store.egg.getCount() > 0 && store.mining.getSpaceCount() > 0) {
      store.egg.count--;
      store.mining.spaceCount --;
      store.kobold.count++;
    }
  }

  @action
  resetStores() {
    store.reset();
  }

  @action
  hatchKoboldAutomatic(number) {
    const koboldsToHatch = Math.min(store.egg.getCount(), store.mining.getSpaceCount(), number);
    store.kobold.count += koboldsToHatch;
    store.egg.count -= koboldsToHatch;
    store.mining.spaceCount -= koboldsToHatch;
  }

  @action
  produceEgg(number) {
    store.egg.count += number;
  }

  @action
  produceKobold(number) {
    if (store.egg.getCount() >= 1 && store.mining.getSpaceCount() >= 1) {
      store.breeding.hatchProgress += number;
      if (store.breeding.getHatchProgress() >=1) {
        let koboldsToHatch = Math.min(store.egg.getCount(), store.mining.getSpaceCount(), Math.floor(store.breeding.getHatchProgress()))
        store.kobold.count += koboldsToHatch;
        store.egg.count -= koboldsToHatch;
        store.mining.spaceCount -= koboldsToHatch;
        store.breeding.hatchProgress -= koboldsToHatch;
      }
    }
  }

  @action
  produceIchor(number) {
    if (store.rad.getIchorCount(0) < store.rad.getIchorCount(1)) {
      const min = store.rad.getIchorCount(1) - store.rad.getIchorCount(0);
      store.rad.ichorCount[0] += Math.min(number, min);
    }

  }

  @action
  produceGold(number) {
    if (store.mining.getGoldCount(0) < store.mining.getGoldCount(1)) {
      const min = store.mining.getGoldCount(1) - store.mining.getGoldCount(0);
      store.mining.goldCount[0] += Math.min(number, min);
    }
  }

  @action
  produceSpace(number) {
    store.mining.spaceCount += number;
  }

  @action
  modifyVocation(type, number) {
    switch (type) {
      case 'male' :
        store.breeding.vocationCount[0] += number;
        break;
      case 'female' :
        store.breeding.vocationCount[1] += number;
        break;
      case 'wetnurse' :
        store.breeding.vocationCount[2] += number;
        break;
      case 'scientist' :
        store.rad.vocationCount[0] += number;
        break;
      case 'miner' :
        store.mining.vocationCount[0] += number;
        break;
      case 'tunneler' :
        store.mining.vocationCount[1] += number;
        break;
    }
    store.kobold.employedCount += number;
  }

  @action
  researchTech(name) {
    tech.research(name);
    store.rad.ichorCount[0] -= store.tech.getCost(name);
    store.tech.list[name].researched = true;
  }
}

export default new KoboldActions;
