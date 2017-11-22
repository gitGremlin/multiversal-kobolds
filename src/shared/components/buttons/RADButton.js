import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {Button, Tooltip} from 'material-ui';
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
        <Tooltip
          title={store.tech.getEnableTooltips() ? store.tech.list[this.props.name].description : "If we research 'private investigations', we can discover what this does"}>
          <Button
            raised
            color="primary"
            disabled={store.tech.getCost(this.props.name) > store.rad.getIchorCount(0)}
            onClick={() => {
              this.handleTechOnClick(this.props.name);
            }}>
            {store.tech.getName([this.props.name])}
          </Button>
        </Tooltip>
      </div>
    );
  }
}
