import action from '../actions/KoboldActions';
import store from '../stores/KoboldStore';

let ticksProduced = 0;

function setBreedingStats() {
  if (store.getVocationCount('female') > 0 && store.getVocationCount('male') > 0) {
    const maleMod = store.getVocationCount('male');
    const femaleMod = store.getVocationCount('female') / store.getGenerationRate('female');

    store.eggsPerTick = (Math.min(maleMod, femaleMod)) / 80;
  } else {
    store.eggsPerTick = 0;
  }
  store.koboldsPerTick = store.getVocationCount('wetnurse') / store.getGenerationRate('wetnurse');
}

function setRADStats() {
  store.radSciencePerTick = store.getVocationCount('scientist') / store.getGenerationRate('science');
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
