import {observer} from 'mobx-react';
import React from 'react';
import store from '../stores/KoboldStore';

@observer
export default class KoboldStats extends React.Component {
  render() {
    const koboldCount = store.getKoboldCount();
    const eggCount = store.getEggCount();

    return (
      <div>
        <div>
          Kobolds Birthed: {koboldCount}
        </div>
        <div>
          Eggs Available: {eggCount}
        </div>
      </div>
    );
  }
}
