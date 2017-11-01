import { action } from 'mobx';

import store from '../stores/KoboldStore';

class KoboldActions {
  constructor() {}

  @action hatchKoboldManual() {
    if(store.eggCounter>0)
      store.eggCounter--
      store.koboldCounter++
  }
}

export default new KoboldActions;
