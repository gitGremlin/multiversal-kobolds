import action from '../actions/KoboldActions';
import store from '../stores/KoboldStore';

let ticksProduced = 0;

function setBreedingStats() {
  if (store.getBreedingCount('female') > 0 && store.getBreedingCount('male') > 0) {
    const maleMod = store.getBreedingCount('male');
    const femaleMod = store.getBreedingCount('female') / store.getGenerationRate('female');

    store.eggsPerTick = (Math.min(maleMod, femaleMod)) / 80;
  } else {
    store.eggsPerTick = 0;
  }
  store.koboldsPerTick = store.getBreedingCount('wetnurse') / store.getGenerationRate('wetnurse');
}

function setRADStats() {
  store.radSciencePerTick = store.getRADCount('scientist') / store.getGenerationRate('science');
}

function doProduce() {
  action.produceEgg(store.getEggsPerTick());
  action.produceKobold(store.getKoboldsPerTick());
  action.produceScience(store.getRADSciencePerTick());
}

function showRAD() {
  for (let item in store.techTree) {
    if (!store.techTree[item].available) {
      if (store.getRADScienceCount(0) > (store.techTree[item].cost)-10) {
        store.techTree[item].available = true;
      }
    }
  }
}

export default function () {
  ticksProduced++;

  setBreedingStats();
  setRADStats();
  showRAD();
  doProduce();
}
