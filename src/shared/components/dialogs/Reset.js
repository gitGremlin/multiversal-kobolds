import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {Button, Dialog} from 'material-ui';
import {DialogActions, DialogTitle, DialogContent, DialogContentText} from 'material-ui/Dialog';
import action from '../../actions/KoboldActions';
import store from '../../stores/KoboldStore';

@observer
export default class ResetButton extends Component {

  handleRequestClose = (boolean) => {
    store.page.dialogControl.open = false;
    if (boolean) {
      action.resetStores();
    }
  };

  render() {
    return (
      <Dialog
        onBackdropClick={() => {
          this.handleRequestClose(false);
        }}
        onEscapeKeyUp={() => {
          this.handleRequestClose(false);
        }}
        open={store.page.getDialog().open}>
        <DialogTitle>{"Really reset your game to default?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The game is paused while you make this decision.
          </DialogContentText>
        </DialogContent>
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
    );
  }
}
