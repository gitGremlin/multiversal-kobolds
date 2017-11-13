import {observable} from 'mobx';

export default class PageControl {

  @observable dialogControl = {
    open: false,
  };
  @observable snackbarControl = {
    open: false,
  };
  @observable drawerControl = {
    open: false,
  };

  getDialog() {
    return this.dialogControl;
  }

  getSnackbar() {
    return this.snackbarControl;
  }

  getDrawer() {
    return this.drawerControl;
  }
}
