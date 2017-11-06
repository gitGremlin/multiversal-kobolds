import {observer} from 'mobx-react';
import React, { Component } from 'react';
import action from '../../actions/KoboldActions';
import store from '../../stores/KoboldStore';
import {Paper, Typography, IconButton} from 'material-ui';
import {AddBox, IndeterminateCheckBox} from 'material-ui-icons/';

@observer
export default class KoboldThinking extends Component {
  handleOnClick = (type, number) => {
    action.modifyThinking(type, number);
  };

  render() {
    const hidden = !store.getVocationTime('science');
    const style = {
      padding: 5,
      margin: 10,
      width: 300,
      float: 'left'
    };

    const scientistCount = store.getThinkingCount('scientist');
    const wizardCount = store.getThinkingCount('wizard');

    const addDisabled = (store.getKoboldEmployedCount() >= store.getKoboldCount());
    const reduceDisabledScientist = scientistCount === 0;
    const reduceDisabledWizard = wizardCount === 0;


    return (
      <Paper elevation={4} style={style} hidden={hidden}>

        <Typography type="headline" component="h3" align="center">
          Thinking Studies
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
        <Typography type="body1" component="p">
          <IconButton
            disabled={reduceDisabledWizard}
            onClick={() => {
              this.handleOnClick('wizard', -1);
            }}>
            <IndeterminateCheckBox/>
          </IconButton>
          <IconButton
            disabled={addDisabled}
            onClick={() => {
              this.handleOnClick('wizard', +1);
            }}>
            <AddBox/>
          </IconButton>
          Wizards: {wizardCount}
        </Typography>
      </Paper>
    );
  }
}
