import {action} from 'mobx';

import store from '../stores/KoboldStore';

class KoboldTechActions {
  @action
  research(name) {
    switch (name) {
      case('husbandry') :
        store.generation['female'] -= 1;
        break;
      case('ichorExtractors') :
        store.generation['ichorExtractors'] -= 50;
        break;
      case('library') :
        store.enableResearch = true;
        break;
      case ('privateInvestigations') :
        store.enableTooltips = true;
        break;
    }
  }
}

export default new KoboldTechActions;
