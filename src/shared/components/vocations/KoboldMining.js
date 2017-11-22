import {observer} from 'mobx-react';
import React, {Component} from 'react';
import store from '../../stores/KoboldStore';
import VocationTable from '../tables/KoboldVocationTable';
import {Paper, Typography} from 'material-ui';

@observer
export default class KoboldMining extends Component {

  render() {
    const hidden = store.kobold.getCount() < 75;

    const style = {
      padding: 16,
      margin: 10,
      minWidth: 300,
      float: 'left'
    };

    const goldPerSecond = (Math.round(store.mining.getGoldPerTick() * 400) / 100);
    const miningSpacePerSecond = (Math.round((store.mining.getSpacePerTick() - store.kobold.getPerTick()) * 400) / 100);

    return (
      <Paper className="paper" elevation={4} style={style} hidden={hidden}>
        <div>
          <Typography type="headline" component="h3" align="center">
            Mineral Acquisition
          </Typography>
          <Typography type="body1" component="p">
            Gold Available: {store.mining.getGoldCount(0)}/{store.mining.getGoldCount(1)} (+ {goldPerSecond}/s)
          </Typography>
          <Typography type="body1" component="p">
            Space Available: {store.mining.getSpaceCount()} ({(miningSpacePerSecond >= 0) ? '+' : '-'} {Math.abs(miningSpacePerSecond)}/s)
          </Typography>

          <VocationTable name='mining'/>

        </div>
      </Paper>
    );
  }
}
