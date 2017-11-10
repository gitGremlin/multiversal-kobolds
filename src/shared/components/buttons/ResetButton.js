import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {Button} from 'material-ui';
import action from '../../actions/KoboldActions';
import store from '../../stores/KoboldStore';
import Dialog, {DialogActions, DialogTitle} from 'material-ui/Dialog';

@observer
export default class KoboldRADButton extends Component {

  handleOnClickReset = () => {
    store.dialog.open = true;
  };

  handleRequestClose = (boolean) => {
    store.dialog.open = false;
    if (boolean) {
      action.resetStores();
    }
  };

  render() {
    return (
      <div className='radButton'>
        <Button
          raised
          dense
          onClick={this.handleOnClickReset}>
          Reset Game
        </Button>
        <Dialog
          onBackdropClick={() => {
            this.handleRequestClose(false);
          }}
          onEscapeKeyUp={() => {
            this.handleRequestClose(false);
          }}
          open={store.getDialog().open}>
          <DialogTitle>{"Really reset your game to default?"}</DialogTitle>
          <DialogActions>
            <Button
              onClick={() => {
                this.handleRequestClose(false);
              }}
              color="primary"
              autoFocus>
              Nevermind
            </Button>
            <Button
              onClick={() => {
                this.handleRequestClose(true);
              }}
              color="primary">
              Reset my game!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
