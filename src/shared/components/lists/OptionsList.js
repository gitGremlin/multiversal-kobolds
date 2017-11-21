import {observer} from 'mobx-react';
import React, {Component} from 'react';
import {List} from 'material-ui';
import {ListItem, ListItemIcon, ListItemText} from 'material-ui/List';
import store from '../../stores/KoboldStore';
import {Cake, Refresh, HelpOutline} from 'material-ui-icons/'
import ResetDialog from '../dialogs/Reset';

@observer
export default class OptionsList extends Component {

  handleRequestReset = () => {
    store.page.dialogControlReset.open = true;
  };

  render() {
    return (
      <div className="options">
        <List>
          <ListItem>
            <ListItemText inset primary="The game is currently paused."/>
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
              <Cake/>
            </ListItemIcon>
            <ListItemText primary="Buy Me a Cake"/>
          </ListItem>
        </List>
        <ResetDialog/>
      </div>
    );
  }
}
