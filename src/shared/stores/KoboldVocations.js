import {observable} from 'mobx';

class KoboldVocations {
  @observable list = {
    male: {
      name: 'Males',
      type: 'breeding',
      description: ''
    },
    female: {
      name: 'Females',
      type: 'breeding',
      description: ''
    },
    wetnurse: {
      name: 'Wet Nurses',
      type: 'breeding',
      description: ''
    },
    scientist: {
      name: 'Ichor Enthusiasts',
      type: 'rad',
      description: ''
    },
  };
}

export default new KoboldVocations;
