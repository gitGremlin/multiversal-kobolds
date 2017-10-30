import {observer} from 'mobx-react'
import React from 'react';
import koboldActions from '../actions/KoboldActions'
import store from '../stores/KoboldStore'
import IconButton from 'material-ui/IconButton';
import PersonAddIcon from 'material-ui-icons/PersonAdd';

@observer
export default class KoboldHatch extends React.Component {
  handleOnHatchEgg = () => {
    koboldActions.hatchKoboldManual();
    console.log("Kobolds Birthed: " + store.koboldCounter)
  };

  render() {
    return(
    <div>
      <IconButton
        onClick={this.handleOnHatchEgg}
        aria-label="Hatch Egg">
        <PersonAddIcon/>
      </IconButton>
    </div>
    )
  }
}
