import {observable} from 'mobx';

class KoboldVocations {
  @observable list = {
    male: {
      name: 'Males',
      type: 'breeding',
      description: '',
    },
    female: {
      name: 'Females',
      type: 'breeding',
      description: '',
    },
    wetnurse: {
      name: 'Wet Nurses',
      type: 'breeding',
      description: '',
    },
    scientist: {
      name: 'Ichor Enthusiasts',
      type: 'rad',
      description: '',
    },
    miner: {
      name: 'Miner',
      type: 'mining',
      description: '',
    },
    tunneler: {
      name: 'Tunneler',
      type: 'mining',
      description: '',
    },
    farmer: {
      name: 'Cat Farmer',
      type: 'farming',
      description: '',
    },
    butcher: {
      name: 'Butcher',
      type: 'farming',
      description: '',
    },
  };
}

export default new KoboldVocations;
