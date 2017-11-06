import {action} from 'mobx';

import store from '../stores/KoboldStore';

class KoboldTechActions {
  @action
  research(name) {
    switch (name) {
      case('husbandry') :
        store.generation['female'] -= 1;
        break;
    }
  }
}

export default new KoboldTechActions;
