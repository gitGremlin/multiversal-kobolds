import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {List} from 'material-ui';
import {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import store from '../../stores/KoboldStore';
import RefreshIcon from 'material-ui-icons/Refresh';
import ResetDialog from '../dialogs/Reset';

@observer
export default class OptionsList extends Component {

  handleRequestReset = () => {
    console.log("this was pressed");
    store.page.dialogControl.open = true;
  };

  render() {
    return (
      <div className="options">
        <List>
          <ListItem
            button
            onClick={() => {
              this.handleRequestReset();
            }}>
            <ListItemIcon>
              <RefreshIcon/>
            </ListItemIcon>
            <ListItemText primary="Restart Game"/>
          </ListItem>
        </List>
        <ResetDialog/>
      </div>
    );
  }
}
