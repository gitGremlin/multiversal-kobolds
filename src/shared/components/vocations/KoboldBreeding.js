import {observer} from 'mobx-react';
import React, {Component} from 'react';
import store from '../../stores/KoboldStore';
import VocationTable from '../tables/KoboldVocationTable';
import {Paper, Typography} from 'material-ui';

@observer
export default class KoboldBreeding extends Component {

  render() {
    const hidden = store.kobold.getCount() < 2;

    const style = {
      padding: 16,
      margin: 10,
      minWidth: 300,
      float: 'left'
    };

    const eggCount = store.egg.getCount();
    const eggsPerSecond = (Math.round((store.egg.getPerTick() - store.kobold.getPerTick()) * 400) / 100);
    const koboldCount = store.kobold.getCount();
    const koboldsPerSecond = (Math.round(store.kobold.getPerTick() * 400) / 100);

    return (
      <Paper className="paper" elevation={4} style={style} hidden={hidden}>
        <div>
          <Typography type="headline" component="h3" align="center">
            Breeding Programme
          </Typography>
          <Typography type="body1" component="p">
            Eggs Available: {eggCount} ({(eggsPerSecond >= 0) ? '+' : '-'} {Math.abs(eggsPerSecond)}/s)
          </Typography>
          <Typography type="body1" component="p">
            Kobolds Birthed: {koboldCount} (+ {koboldsPerSecond}/s)
          </Typography>

          <VocationTable name='breeding'/>

        </div>
      </Paper>
    );
  }
}
