import React from 'react';
import ticker from '../util/KoboldTicker';

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

import KoboldBar from '../components/KoboldBar';
import KoboldHatch from '../components/KoboldHatch';
import KoboldStats from '../components/KoboldStats';
import KoboldBreeding from '../components/vocations/KoboldBreeding';
import KoboldThinking from '../components/vocations/KoboldThinking';

const theme = createMuiTheme({
//   palette: {
//     background: {
//       paper: 'cyan'
//     }
//   },
//   status: {
//     danger: 'orange'
//   }
});

export default class Index extends React.Component {


  constructor() {
    super();
    setInterval(function () {
      ticker();
    }, 250);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div id='container'>
          <div>
            <KoboldBar/>
            <br/>
            <KoboldHatch/>
            <KoboldStats/>
          </div>
          <hr/>
          <div>
            <KoboldBreeding/>
            <KoboldThinking/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
