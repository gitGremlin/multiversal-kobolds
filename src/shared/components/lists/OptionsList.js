import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {List} from 'material-ui';
import {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import store from '../../stores/KoboldStore';
import {FreeBreakfast, Refresh, HelpOutline} from 'material-ui-icons/'
import ResetDialog from '../dialogs/Reset';

@observer
export default class OptionsList extends Component {

  handleRequestReset = () => {
    store.page.dialogControl.open = true;
  };

  render() {
    return (
      <div className="options">
        <List>
          <ListItem
            button
            onClick={() => {
              this.handleRequestAbout();
            }}>
            <ListItemIcon>
              <HelpOutline/>
            </ListItemIcon>
            <ListItemText primary="About & FAQs"/>
          </ListItem>
          <ListItem
            button
            onClick={() => {
              this.handleRequestTip();
            }}>
            <ListItemIcon>
              <FreeBreakfast/>
            </ListItemIcon>
            <ListItemText primary="Pay for my next Coffee"/>
          </ListItem>
          <ListItem
            button
            onClick={() => {
              this.handleRequestReset();
            }}>
            <ListItemIcon>
              <Refresh/>
            </ListItemIcon>
            <ListItemText primary="Restart Game"/>
          </ListItem>
        </List>
        <ResetDialog/>
      </div>
    );
  }
}
