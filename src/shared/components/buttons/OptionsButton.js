import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {Button, Drawer} from 'material-ui';
import store from '../../stores/KoboldStore';
import OptionsList from '../lists/OptionsList'

@observer
export default class OptionsButton extends Component {

  handleOnClickOptions = () => {
    store.page.drawerControl.open = true;
  };

  handleRequestClose = () => {
    store.page.drawerControl.open = false;
  };

  render() {
    return (
      <div className='optionsButton'>
        <Button
          raised
          dense
          onClick={this.handleOnClickOptions}>
          Options
        </Button>
        <Drawer
          onBackdropClick={() => {
            this.handleRequestClose();
          }}
          onEscapeKeyUp={() => {
            this.handleRequestClose();
          }}
          anchor="bottom"
          open={store.page.getDrawer().open}>
          <div className="optionsList">
            <OptionsList/>
          </div>
        </Drawer>
      </div>
    );
  }
}
