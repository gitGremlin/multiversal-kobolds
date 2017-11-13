import React from 'react';
import {Typography} from 'material-ui';
import OptionsButton from "../components/buttons/OptionsButton";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div id='footerContainer'>
          <OptionsButton/>
          <br/>
          <Typography type="caption" gutterBottom align="left">
            From <a href='https://thenounproject.com/' target='_blank'>the Noun Project</a>:
            <br/>
            <a href='https://thenounproject.com/icon/1387590/' target='_blank'>Dragon</a> by Icons Producer
            {/*<br/>*/}
            {/*<a href='https://thenounproject.com/icon/1175516/' target='_blank'>Egg</a> by Mr Balind*/}
          </Typography>
        </div>
      </div>
    );
  }
}
