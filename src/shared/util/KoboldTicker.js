import action from '../actions/KoboldActions';
import store from '../stores/KoboldStore';

let ticksProduced = 0;

function setBreedingStats() {
  if (store.getBreedingCount('female') > 0 && store.getBreedingCount('male') > 0) {
    const maleMod = store.getBreedingCount('male');
    const femaleMod = store.getBreedingCount('female') / 4;

    store.eggsPerTick = (Math.min(maleMod, femaleMod)) / 80;
  } else {
    store.eggsPerTick = 0;
  }
  store.koboldsPerTick = store.getBreedingCount('wetnurse')/200;
}

function setRADStats() {
  store.radSciencePerTick = store.getRADCount('scientist')/100
}

function doProduce() {
  action.produceEgg(store.getEggsPerTick());
  action.produceKobold(store.getKoboldsPerTick());
  action.produceScience(store.getRADSciencePerTick())
}

export default function () {
  ticksProduced++;

  setBreedingStats();
  setRADStats();
  doProduce();
}
