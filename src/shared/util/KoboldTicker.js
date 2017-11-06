import action from '../actions/KoboldActions';
import store from '../stores/KoboldStore';

let ticksProduced = 0;

function setVocations() {
  if (store.koboldCount >= 2) {
    store.breedingTime = true;
  }
}

function setBreedingStats() {
  if (store.getBreedingFemaleCount() > 0 && store.getBreedingMaleCount() > 0) {
    const maleMod = store.getBreedingMaleCount();
    const femaleMod = store.getBreedingFemaleCount() / 4;

    store.eggsPerTick = (Math.min(maleMod, femaleMod)) / 40;
  } else {
    store.eggsPerTick = 0;
  }
  store.koboldsPerTick = store.getBreedingWetnurseCount()/80;
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
