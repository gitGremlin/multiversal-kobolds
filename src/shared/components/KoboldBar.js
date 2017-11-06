import {observer} from 'mobx-react';
import React, { Component } from 'react';
import {AppBar, Toolbar, Typography} from 'material-ui';

@observer
export default class KoboldBar extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography type="title" color="inherit">
              Kobold Nest
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
