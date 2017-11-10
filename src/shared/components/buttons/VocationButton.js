import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {Typography, IconButton} from 'material-ui';
import {AddBox, IndeterminateCheckBox} from 'material-ui-icons/';
import action from '../../actions/KoboldActions';
import store from '../../stores/KoboldStore';

@observer
export default class KoboldVocationButton extends Component {

  handleOnClick = (type, number) => {
    action.modifyVocation(type, number);
  };

  render() {

    const vocationPopCount = store.getVocationCount(this.props.name);

    const addDisabled = (store.kobold.getEmployedCount() >= store.kobold.getCount());
    const reduceDisabledPop = vocationPopCount === 0;

    return (
      <Typography type="body1" component="p">
        <IconButton
          disabled={reduceDisabledPop}
          onClick={() => {
            this.handleOnClick(this.props.name, -1);
          }}>
          <IndeterminateCheckBox/>
        </IconButton>
        <IconButton
          disabled={addDisabled}
          onClick={() => {
            this.handleOnClick(this.props.name, +1);
          }}>
          <AddBox/>
        </IconButton>
        {store.vocation.list[this.props.name].name}: {vocationPopCount}
      </Typography>
    );
  }
}
