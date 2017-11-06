import {observer} from 'mobx-react';
import React, { Component } from 'react';
import action from '../../actions/KoboldActions';
import store from '../../stores/KoboldStore';
import {Paper, Typography, IconButton} from 'material-ui';
import {AddBox, IndeterminateCheckBox} from 'material-ui-icons/';

@observer
export default class KoboldVocations extends Component {
  handleOnClick = (type, number) => {
    action.modifyBreeding(type, number);
  };

  render() {
    const hidden = !store.getVocationTime('science');
    const style = {
      padding: 5,
      margin: 10,
      width: 300,
      float: 'left'
    };

    const maleCount = store.getBreedingMaleCount();
    const femaleCount = store.getBreedingFemaleCount();
    const wetnurseCount = store.getBreedingWetnurseCount();

    const addDisabled = (store.getKoboldEmployedCount() >= store.getKoboldCount());
    const reduceDisabledMale = store.getBreedingMaleCount() === 0;
    const reduceDisabledFemale = store.getBreedingFemaleCount() === 0;
    const reduceDisabledWetnurse = store.getBreedingWetnurseCount() === 0;


    return (
      <Paper elevation={4} style={style} hidden={hidden}>
        <Typography type="headline" component="h3">
          SCIENCE!
        </Typography>
        <div>
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
        </div>
        <div>
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
        </div>
        <hr/>
        <div>
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
        </div>
      </Paper>
    );
  }
}
