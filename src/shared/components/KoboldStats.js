import {observer} from 'mobx-react';
import React, { Component } from 'react';
import store from '../stores/KoboldStore';

@observer
export default class KoboldStats extends Component {
  render() {
    const koboldCount = store.getKoboldCount();
    const eggCount = store.getEggCount();
    const koboldEmployedCount = store.getKoboldEmployedCount();
    const koboldUnemployedCount = koboldCount - koboldEmployedCount;
    const koboldsPerSecond = store.getKoboldsPerTick() *4;
    const eggsPerSecond = store.getEggsPerTick()*4;

    return (
      <div>
        <h1>Totals</h1>
        <div>
          Kobolds Birthed: {koboldCount} (+ {koboldsPerSecond}/s)
        </div>
        <div>
          Eggs Available: {eggCount} (+ {eggsPerSecond}/s)
        </div>
        <div>
          Employed Kobolds: {koboldEmployedCount}
        </div>
        <div>
          Available Kobolds {koboldUnemployedCount}
        </div>
      </div>
    );
  }
}
