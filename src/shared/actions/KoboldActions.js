import { action } from 'mobx';

import store from '../stores/KoboldStore';

class KoboldActions {
  constructor() {}

  @action hatchKoboldManual() {
    store.koboldCounter++
  }
}

export default new KoboldActions;
