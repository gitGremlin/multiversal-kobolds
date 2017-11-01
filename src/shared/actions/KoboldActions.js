import { action } from 'mobx';

import store from '../stores/KoboldStore';

class KoboldActions {
  constructor() {}

  @action hatchKoboldManual() {
    if(store.getEggCount()>0)
      store.eggCount--;
      store.koboldCount++
  }

  @action hatchKoboldAutomatic(number) {
    const koboldsToHatch = Math.min(store.getEggCount(), number);
    store.koboldCount+=koboldsToHatch;
    store.eggCount-=koboldsToHatch
  }

  @action produceEgg(number) {
    store.eggCount+=number;
  }
}

export default new KoboldActions;
