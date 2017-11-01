import {observer} from 'mobx-react';
import React from 'react';
import store from '../stores/KoboldStore';

@observer
export default class KoboldStats extends React.Component {
  render() {
    const koboldCount = store.getKoboldCount();
    const eggCount = store.getEggCount();
    const koboldEmployedCount = store.getKoboldEmployedCount();
    const eggsPerSecond = store.getEggsPerTick()*4;

    return (
      <div>
        <h1>Totals</h1>
        <div>
          Kobolds Birthed: {koboldCount}
        </div>
        <div>
          Employed Kobolds: {koboldEmployedCount}
        </div>
        <div>
          Eggs Available: {eggCount} (+ {eggsPerSecond}/s)
        </div>
      </div>
    );
  }
}
