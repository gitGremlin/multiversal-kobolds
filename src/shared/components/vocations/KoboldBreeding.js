import {observer} from 'mobx-react';
import React, {Component} from 'react';
import action from '../../actions/KoboldActions';
import store from '../../stores/KoboldStore';
import {Paper, Typography, IconButton} from 'material-ui';
import {AddBox, IndeterminateCheckBox} from 'material-ui-icons/';

@observer
export default class KoboldBreeding extends Component {
  handleOnClick = (type, number) => {
    action.modifyBreeding(type, number);
  };

  render() {
    const hidden = store.getKoboldCount() < 2;

    const style = {
      padding: 16,
      margin: 10,
      width: 300,
      float: 'left'
    };

    const maleCount = store.getBreedingCount('male');
    const femaleCount = store.getBreedingCount('female');
    const wetnurseCount = store.getBreedingCount('wetnurse');

    const addDisabled = (store.getKoboldEmployedCount() >= store.getKoboldCount());
    const reduceDisabledMale = maleCount === 0;
    const reduceDisabledFemale = femaleCount === 0;
    const reduceDisabledWetnurse = wetnurseCount === 0;

    const eggCount = store.getEggCount();
    const eggsPerSecond = (Math.round(store.getEggsPerTick() * 400)/100);
    const koboldCount = store.getKoboldCount();
    const koboldsPerSecond = (Math.round(store.getKoboldsPerTick() * 400)/100);


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
          <Typography type="body1" component="p">
            <IconButton
              disabled={reduceDisabledMale}
              onClick={() => {
                this.handleOnClick('male', -1);
              }}>
              <IndeterminateCheckBox/>
            </IconButton>
            <IconButton
              disabled={addDisabled}
              onClick={() => {
                this.handleOnClick('male', +1);
              }}>
              <AddBox/>
            </IconButton>
            Males: {maleCount}
          </Typography>
        </div>
        <div>
          <Typography type="body1" component="p">
            <IconButton
              disabled={reduceDisabledFemale}
              onClick={() => {
                this.handleOnClick('female', -1);
              }}>
              <IndeterminateCheckBox/>
            </IconButton>
            <IconButton
              disabled={addDisabled}
              onClick={() => {
                this.handleOnClick('female', +1);
              }}>
              <AddBox/>
            </IconButton>
            Females: {femaleCount}
          </Typography>
        </div>
        <hr/>
        <div>
          <Typography type="body1" component="p">
            <IconButton
              disabled={reduceDisabledWetnurse}
              onClick={() => {
                this.handleOnClick('wetnurse', -1);
              }}>
              <IndeterminateCheckBox/>
            </IconButton>
            <IconButton
              disabled={addDisabled}
              onClick={() => {
                this.handleOnClick('wetnurse', +1);
              }}>
              <AddBox/>
            </IconButton>
            Wet Nurses: {wetnurseCount}
          </Typography>
        </div>
      </Paper>
    );
  }
}
