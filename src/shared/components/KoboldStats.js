import {observer} from 'mobx-react'
import React from 'react';
import store from '../stores/KoboldStore'

@observer
export default class KoboldStats extends React.Component {
  render() {
    const koboldCount = store.retrieveKoboldCount()
    return (
      <div>
        Kobolds Birthed: {koboldCount}
      </div>
    );
  }
}
