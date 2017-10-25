import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import 'src/client/styles/main.scss'

function KoboldBar() {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography type="title" color="inherit">
            Multiversal Kobolds
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default KoboldBar;
