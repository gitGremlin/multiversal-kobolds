import action from '../actions/KoboldActions'
import store from '../stores/KoboldStore'

let ticksProduced = 0;

export default function () {
  ticksProduced++;
  action.produceEgg(store.getEggsPerSecond());
}
