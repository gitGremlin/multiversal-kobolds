import {action} from 'mobx';

import store from '../stores/KoboldStore';

class KoboldTechActions {
  @action
  research(name) {
    switch (name) {
      case('husbandry') :
        store.generation.list['female'] -= 1;
        break;
      case('library') :
        store.enableResearch = true;
        break;
      case ('privateInvestigations') :
        store.enableTooltips = true;
        break;
      case('ichorStorage') :
        store.rad.ichorCount[1] += 100;
        break;
    }
  }
}

export default new KoboldTechActions;
