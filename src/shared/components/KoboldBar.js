import {observer} from 'mobx-react';
import React from 'react';
import {AppBar, Toolbar, Typography} from 'material-ui';

@observer
export default class KoboldBar extends React.Component {
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
