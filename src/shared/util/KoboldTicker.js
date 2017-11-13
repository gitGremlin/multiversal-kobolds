import action from '../actions/KoboldActions';
import store from '../stores/KoboldStore';

let ticksProduced = 0;

function setBreedingStats() {
  if (store.getVocationCount('female') > 0 && store.getVocationCount('male') > 0) {
    const maleMod = store.getVocationCount('male');
    const femaleMod = store.getVocationCount('female') / store.generation.getRate('female');

    store.egg.perTick = (Math.min(maleMod, femaleMod)) / 80;
  } else {
    store.egg.perTick = 0;
  }
  store.kobold.perTick = store.getVocationCount('wetnurse') / store.generation.getRate('wetnurse');
}

function setRADStats() {
  store.rad.ichorPerTick = store.getVocationCount('scientist') / store.generation.getRate('ichor');
}

function setMiningStats() {
  store.mining.goldPerTick = store.getVocationCount('miner') / store.generation.getRate('gold');
  store.mining.spacePerTick = store.getVocationCount('tunneler') / store.generation.getRate('space');
}

function doProduce() {
  action.produceEgg(store.egg.getPerTick());
  action.produceKobold(store.kobold.getPerTick());
  action.produceIchor(store.rad.getIchorPerTick());
  action.produceGold(store.mining.getGoldPerTick());
  action.produceSpace(store.mining.getSpacePerTick());
}

function showRAD() {
  for (let item in store.tech.list) {
    if (!store.tech.getAvailable(item)) {
      if (store.rad.getIchorCount(0) > (store.tech.getCost(item))-10) {
        store.tech.list[item].available = true;
      }
    }
  }
}

export default function () {
  // Pause Function
  if(store.page.getDialog().open || store.page.getDrawer().open) return;

  // Counter
  ticksProduced++;

  // Main Ticker Function
  setBreedingStats();
  setRADStats();
  setMiningStats();
  showRAD();
  doProduce();
}
