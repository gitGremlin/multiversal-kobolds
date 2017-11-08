import {observable} from 'mobx';

class KoboldVocations {
  @observable list = {
    male: {
      name: 'Males',
      description: ''
    },
    female: {
      name: 'Females',
      description: ''
    },
    wetnurse: {
      name: 'Wet Nurses',
      description: ''
    },
    scientist: {
      name: 'Ichor Enthusiasts',
      description: ''
    },
  };
}

export default new KoboldVocations;
