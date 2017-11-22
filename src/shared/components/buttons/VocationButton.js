import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {Button, Typography, Tooltip} from 'material-ui';
import {TableRow, TableCell} from 'material-ui/Table';
import action from '../../actions/KoboldActions';
import store from '../../stores/KoboldStore';

@observer
export default class KoboldVocationButton extends Component {

  handleOnClick = (type, number) => {
    action.modifyVocation(type, number);
  };

  checkReduceDisabled = (count, limit) => {
    return count < limit;
  };

  checkAddDisabled = (limit) => {
    return (store.kobold.getCount() - store.kobold.getEmployedCount()) < limit;
  };

  render() {

    const vocationPopCount = store.getVocationCount(this.props.name);

    return (
      <TableRow>
        <TableCell>
          <Tooltip
            title={store.tech.getEnableTooltips() ? store.vocation.list[this.props.name].description : "Dunno what this job is yet, boss - research 'private investigations'"}>
            <Typography type="button">
              {store.vocation.list[this.props.name].name}:
            </Typography>
          </Tooltip>
        </TableCell>
        <TableCell
          hidden={store.kobold.getCount() < 500}>
          <Button
            dense
            disabled={this.checkReduceDisabled(vocationPopCount, 100)}
            onClick={() => {
              this.handleOnClick(this.props.name, -100);
            }}>
            -100
          </Button>
        </TableCell>
        <TableCell
          hidden={store.kobold.getCount() < 50}>
          <Button
            dense
            disabled={this.checkReduceDisabled(vocationPopCount, 10)}
            onClick={() => {
              this.handleOnClick(this.props.name, -10);
            }}>
            -10
          </Button>
        </TableCell>
        <TableCell>
          <Button
            dense
            disabled={this.checkReduceDisabled(vocationPopCount, 1)}
            onClick={() => {
              this.handleOnClick(this.props.name, -1);
            }}>
            &lt;
          </Button>
        </TableCell>
        <TableCell numeric>
          <Typography type="subheading">
            {vocationPopCount}
          </Typography>
        </TableCell>
        <TableCell style={{ padding: 0, textAlign: 'right' }}>
          <Button
            dense
            disabled={this.checkAddDisabled(1)}
            onClick={() => {
              this.handleOnClick(this.props.name, +1);
            }}>
            &gt;
          </Button>
        </TableCell>
        <TableCell
          hidden={store.kobold.getCount() < 50}>
          <Button
            dense
            disabled={this.checkAddDisabled(10)}
            onClick={() => {
              this.handleOnClick(this.props.name, +10);
            }}>
            +10
          </Button>
        </TableCell>
        <TableCell
          style={{ padding: 0, textAlign: 'right' }}
          hidden={store.kobold.getCount() < 500}>
          <Button
            dense
            disabled={this.checkAddDisabled(100)}
            onClick={() => {
              this.handleOnClick(this.props.name, +100);
            }}>
            +100
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}
