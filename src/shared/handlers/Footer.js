import React from 'react';
import {Typography, Button} from 'material-ui';
import ResetButton from '../components/buttons/ResetButton'

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div id='footerContainer'>
          <Typography type="caption" gutterBottom align="left">
            From <a href='https://thenounproject.com/' target='_blank'>the Noun Project</a>:
            <br/>
            <a href='https://thenounproject.com/icon/1387590/' target='_blank'>Dragon</a> by Icons Producer
            {/*<br/>*/}
            {/*<a href='https://thenounproject.com/icon/1175516/' target='_blank'>Egg</a> by Mr Balind*/}
          </Typography>
        </div>
        <br/>
        <ResetButton/>
      </div>
    );
  }
}
