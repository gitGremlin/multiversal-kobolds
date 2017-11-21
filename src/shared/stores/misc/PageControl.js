import {observable} from 'mobx';

export default class PageControl {

  @observable dialogControlReset = {
    open: false,
  };
  @observable snackbarControl = {
    open: false,
    message: '',
  };
  @observable drawerControl = {
    open: false,
  };

  getDialogReset() {
    return this.dialogControlReset;
  }

  getSnackbar() {
    return this.snackbarControl;
  }

  getDrawer() {
    return this.drawerControl;
  }
}
