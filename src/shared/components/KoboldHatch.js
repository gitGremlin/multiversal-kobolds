import {observer} from 'mobx-react'
import React from 'react';
import action from '../actions/KoboldActions'
import store from '../stores/KoboldStore'
import IconButton from 'material-ui/IconButton';
import PersonAddIcon from 'material-ui-icons/PersonAdd';

@observer
export default class KoboldHatch extends React.Component {
  handleOnHatchEgg = () => {
    action.hatchKoboldManual();
  };

  render() {
    const disabled = store.getEggCount()===0;

    return(
    <div>
      <IconButton
        disabled={disabled}
        onClick={this.handleOnHatchEgg}
        aria-label="Hatch Egg">
        <PersonAddIcon/>
      </IconButton>
    </div>
    )
  }
}
