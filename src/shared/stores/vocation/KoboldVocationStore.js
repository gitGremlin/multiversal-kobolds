import {observable} from 'mobx';

export default class KoboldVocationStore {

  @observable list = {
    male: {
      name: 'Males',
      type: 'breeding',
      description: 'Put these together with females to make more eggs',
    },
    female: {
      name: 'Females',
      type: 'breeding',
      description: 'Lays eggs after dancing with males',
    },
    wetnurse: {
      name: 'Wet Nurses',
      type: 'breeding',
      description: 'Looks after eggs and cares for the young',
    },
    scientist: {
      name: 'Ichor Enthusiasts',
      type: 'rad',
      description: 'Really enthusiastic about ichor',
    },
    miner: {
      name: 'Miner',
      type: 'mining',
      description: 'Digs out gold from the mines under our lair',
    },
    tunneler: {
      name: 'Tunneler',
      type: 'mining',
      description: 'Makes more living space, yip yip',
    },
    farmer: {
      name: 'Cat Farmer',
      type: 'farming',
      description: 'Cares for cats on the cat farm',
    },
    butcher: {
      name: 'Butcher',
      type: 'farming',
      description: 'Harvests the cats for leather and meat',
    },
  };

}
