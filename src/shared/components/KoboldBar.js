import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';

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
