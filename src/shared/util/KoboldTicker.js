import action from '../actions/KoboldActions';
import store from '../stores/KoboldStore';

let ticksProduced = 0;

function setVocations() {
  if (store.koboldCount >= 2) {
    store.breedingTime = true;
  }
  if (store.koboldCount >=10) {
    store.radTime = true;
  }
}

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

function doProduce() {
  action.produceEgg(store.getEggsPerTick());
  action.produceKobold(store.getKoboldsPerTick());
}

export default function () {
  ticksProduced++;

  setVocations();
  setBreedingStats();
  doProduce();
}
