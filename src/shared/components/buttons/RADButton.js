import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {Button} from 'material-ui';
import action from '../../actions/KoboldActions';
import store from '../../stores/KoboldStore';

@observer
export default class KoboldRADButton extends Component {

  handleTechOnClick = (type) => {
    action.researchTech(type);
  };

  render() {
    return (
      <div className='radButton'>
        <Button
          raised
          color="primary"
          disabled={store.tech.getCost(this.props.name) > store.rad.getIchorCount(0)}
          onClick={() => {
            this.handleTechOnClick(this.props.name);
          }}>
          {store.tech.getName([this.props.name])}
        </Button>
      </div>
    );
  }
}
