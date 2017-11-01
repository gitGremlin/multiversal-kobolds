import action from '../actions/KoboldActions';
import store from '../stores/KoboldStore';

let ticksProduced = 0;

function setVocations() {
  if (store.koboldCount >= 2) {
    store.breedingTime = true;
  }
}

function setEggs() {
  if (store.getBreedingFemaleCount() > 0 && store.getBreedingMaleCount() > 0) {
    const maleMod = store.getBreedingMaleCount();
    const femaleMod = store.getBreedingFemaleCount() / 4;

    store.eggsPerTick = (Math.min(maleMod, femaleMod))/10;
  }
}

export default function () {
  ticksProduced++;

  setVocations();
  setEggs();

  action.produceEgg(store.getEggsPerTick());
}
