import {observer} from 'mobx-react';
import React, {Component} from 'react';
import action from '../actions/KoboldActions';
import store from '../stores/KoboldStore';
import {IconButton, Tooltip} from 'material-ui/';
import {PersonAdd} from 'material-ui-icons/';

@observer
export default class KoboldHatch extends Component {
  handleOnHatchEgg = () => {
    action.hatchKoboldManual();
  };

  render() {
    const disabled = store.egg.getCount() === 0 || store.mining.getSpaceCount() === 0;

    return (
      <div>
        <Tooltip
          id="tooltip-hatch"
          title="Hatch Kobold"
          placement="right-start">
          <IconButton
            disabled={disabled}
            onClick={this.handleOnHatchEgg}>
            <PersonAdd/>
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}
