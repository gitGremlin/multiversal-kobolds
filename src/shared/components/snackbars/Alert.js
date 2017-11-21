import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {Snackbar} from 'material-ui';
import store from '../../stores/KoboldStore';

@observer
export default class Alert extends Component {

  handleRequestClose = () => {
    store.page.snackbarControl.open = false;
    store.page.snackbarControl.message = '';
  };

  render() {
    return (
      <Snackbar
        open={store.page.getSnackbar().open}
        autoHideDuration={5000}
        onRequestClose={this.handleRequestClose}
        SnackbarContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={store.page.snackbarControl.message}
      />
    );
  }
}
