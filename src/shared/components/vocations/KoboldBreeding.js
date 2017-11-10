import {observer} from 'mobx-react';
import React, {Component} from 'react';
import store from '../../stores/KoboldStore';
import VocationButton from '../buttons/VocationButton';
import {Paper, Typography} from 'material-ui';

@observer
export default class KoboldBreeding extends Component {

  generateVoc = (type) => {
    let vocArr = [];
    let count = 0;
    for (let voc in store.vocation.list) {
      if (store.vocation.list[voc].type === type) {
        count++;
        vocArr.push(<VocationButton key={count} name={voc}/>);
      }
    }
    if (vocArr.length !== 0) {
      vocArr.splice(0, 0, <hr key={0}/>);
    }
    return vocArr;
  };

  render() {
    const hidden = store.kobold.getCount() < 2;

    const style = {
      padding: 16,
      margin: 10,
      width: 300,
      float: 'left'
    };

    const eggCount = store.egg.getCount();
    const eggsPerSecond = (Math.round((store.egg.getPerTick() - store.kobold.getPerTick())* 400) / 100);
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

          {[...this.generateVoc('breeding')]}

        </div>
      </Paper>
    );
  }
}
