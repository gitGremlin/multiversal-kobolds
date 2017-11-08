import React from 'react';
import ReactDOM from "react-dom";
import Index from '../shared/handlers/Index';
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

import materialThemeConfig from './theme/material.theme.config';

const muiTheme = createMuiTheme(materialThemeConfig);

// import styles
import "./styles/main.scss";

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <Index/>
  </MuiThemeProvider>,
  document.getElementById('main')
);
