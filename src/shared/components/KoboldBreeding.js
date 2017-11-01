import {observer} from 'mobx-react';
import React from 'react';
import action from '../actions/KoboldActions';
import store from '../stores/KoboldStore';
import {Paper, Typography, IconButton} from 'material-ui';
import {AddBox, IndeterminateCheckBox} from 'material-ui-icons/';

@observer
export default class KoboldBar extends React.Component {
  handleOnMaleClick = (number) => {
    action.modifyBreedingMale(number);
  };
  handleOnFemaleClick = (number) => {
    action.modifyBreedingFemale(number);
  };

  render() {
    const hidden = !store.getBreedingTime();
    const style = {
      padding: 2,
      width: "30%",
      height: "30%"
    };

    const maleCount = store.getBreedingMaleCount();
    const femaleCount = store.getBreedingFemaleCount();
    const eggsPerSecond = store.getEggsPerTick() * 4;

    const addDisabled = (store.getKoboldEmployedCount() >= store.getKoboldCount());
    const reduceDisabledMale = store.getBreedingMaleCount() === 0;
    const reduceDisabledFemale = store.getBreedingFemaleCount() === 0;


    return (
      <div hidden={hidden}>
        <Paper elevation={4} style={style}>

          <Typography type="headline" component="h3">
            Breeding Programme
          </Typography>
          <div>
            <IconButton
              disabled={reduceDisabledMale}
              onClick={() => {this.handleOnMaleClick(-1)}}>
              <IndeterminateCheckBox/>
            </IconButton>
            <IconButton
              disabled={addDisabled}
              onClick={() => {this.handleOnMaleClick(+1)}}>
              <AddBox/>
            </IconButton>
            Males: {maleCount}
          </div>
          <div>
            <IconButton
              disabled={reduceDisabledFemale}
              onClick={() => {this.handleOnFemaleClick(-1)}}>
              <IndeterminateCheckBox/>
            </IconButton>
            <IconButton
              disabled={addDisabled}
              onClick={() => {this.handleOnFemaleClick(+1)}}>
              <AddBox/>
            </IconButton>
            Females: {femaleCount}
          </div>
        </Paper>
      </div>
    );
  }
}
