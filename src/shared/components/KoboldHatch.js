import {observer} from 'mobx-react';
import React, { Component } from 'react';
import action from '../actions/KoboldActions';
import store from '../stores/KoboldStore';
import {IconButton, Tooltip} from 'material-ui/';
import PersonAddIcon from 'material-ui-icons/PersonAdd';

@observer
export default class KoboldHatch extends Component {
  handleOnHatchEgg = () => {
    action.hatchKoboldManual();
  };

  render() {
    const disabled = store.getEggCount() === 0 || store.getMiningSpaceCount() === 0;

    return (
      <div>
        <Tooltip
          id="tooltip-hatch"
          title="Hatch Kobold"
          placement="right-start">
          <IconButton
            disabled={disabled}
            onClick={this.handleOnHatchEgg}>
            <PersonAddIcon/>
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}
