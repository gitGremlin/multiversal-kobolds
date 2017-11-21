import React from 'react';
import ReactDOM from "react-dom";
import Index from '../shared/handlers/Index';
import Footer from '../shared/handlers/Footer';
import Alert from "../shared/components/snackbars/Alert";
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

import materialThemeConfig from './theme/material.theme.config';

const muiTheme = createMuiTheme(materialThemeConfig);

// import styles
import "./styles/main.scss";

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <div>
      <Alert/>
      <div>
        <Index/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  </MuiThemeProvider>,
  document.getElementById('main')
);
