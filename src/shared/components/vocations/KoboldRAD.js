import {observer} from 'mobx-react';
import React, { Component } from 'react';
import action from '../../actions/KoboldActions';
import store from '../../stores/KoboldStore';
import {Paper, Typography, IconButton} from 'material-ui';
import {AddBox, IndeterminateCheckBox} from 'material-ui-icons/';

@observer
export default class KoboldRAD extends Component {
  handleOnClick = (type, number) => {
    action.modifyRAD(type, number);
  };

  render() {
    const hidden = !store.getVocationTime('rad');
    const style = {
      padding: 5,
      margin: 10,
      width: 300,
      float: 'left'
    };

    const scientistCount = store.getRADCount('scientist');

    const addDisabled = (store.getKoboldEmployedCount() >= store.getKoboldCount());
    const reduceDisabledScientist = scientistCount === 0;


    return (
      <Paper elevation={4} style={style} hidden={hidden}>
        <div>
        <Typography type="headline" component="h3" align="center">
          Research & Development
        </Typography>
          <Typography type="body1" component="p">
          <IconButton
            disabled={reduceDisabledScientist}
            onClick={() => {
              this.handleOnClick('scientist', -1);
            }}>
            <IndeterminateCheckBox/>
          </IconButton>
          <IconButton
            disabled={addDisabled}
            onClick={() => {
              this.handleOnClick('scientist', +1);
            }}>
            <AddBox/>
          </IconButton>
          Scientists: {scientistCount}
          </Typography>
        </div>
      </Paper>
    );
  }
}
