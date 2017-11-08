import {observer} from 'mobx-react';
import React, {Component} from 'react';
import action from '../../actions/KoboldActions';
import store from '../../stores/KoboldStore';
import VocationButton from '../buttons/VocationButton';
import {Paper, Typography} from 'material-ui';

@observer
export default class KoboldBreeding extends Component {

  render() {
    const hidden = store.getKoboldCount() < 2;

    const style = {
      padding: 16,
      margin: 10,
      width: 300,
      float: 'left'
    };

    const eggCount = store.getEggCount();
    const eggsPerSecond = (Math.round(store.getEggsPerTick() * 400) / 100);
    const koboldCount = store.getKoboldCount();
    const koboldsPerSecond = (Math.round(store.getKoboldsPerTick() * 400) / 100);

    return (
      <Paper className="paper" elevation={4} style={style} hidden={hidden}>
        <div>
          <div>
            <Typography type="headline" component="h3" align="center">
              Breeding Programme
            </Typography>
            <Typography type="body1" component="p">
              Eggs Available: {eggCount} (+ {eggsPerSecond}/s)
            </Typography>
            <Typography type="body1" component="p">
              Kobolds Birthed: {koboldCount} (+ {koboldsPerSecond}/s)
            </Typography>
            <hr/>
          </div>

          <VocationButton name='male'/>
          <VocationButton name='female'/>
          <hr/>
          <VocationButton name='wetnurse'/>

        </div>
      </Paper>
    );
  }
}
