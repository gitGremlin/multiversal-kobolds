import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {Typography} from 'material-ui';
import store from '../stores/KoboldStore';

@observer
export default class KoboldStats extends Component {
  render() {
    const koboldCount = store.getKoboldCount();
    const koboldEmployedCount = store.getKoboldEmployedCount();
    const koboldUnemployedCount = koboldCount - koboldEmployedCount;

    return (
      <div>
        <Typography type="headline" component="h1">
          Totals
        </Typography>
        <Typography type="body1" component="p">
          Employed Kobolds: {koboldEmployedCount}
        </Typography>
        <Typography type="body1" component="p">
          Available Kobolds {koboldUnemployedCount}
        </Typography>
      </div>
    );
  }
}
