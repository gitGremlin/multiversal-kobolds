import React from 'react';
import action from '../actions/KoboldActions';
import {Typography, Button} from 'material-ui';

export default class Footer extends React.Component {

  handleOnReset = () => {
    action.resetStores();
  };

  render() {
    return (
      <div>
        <div id='copyrightContainer'>
          <Typography type="caption" gutterBottom align="left">
            From <a href='https://thenounproject.com/' target='_blank'>the Noun Project</a>:
            <br/>
            <a href='https://thenounproject.com/icon/1387590/' target='_blank'>Dragon</a> by Icons Producer
            {/*<br/>*/}
            {/*<a href='https://thenounproject.com/icon/1175516/' target='_blank'>Egg</a> by Mr Balind*/}
          </Typography>
        </div>
        <br/>
        <div>
          <Button
            raised
            dense
            onClick={this.handleOnReset}>
            Reset Game
          </Button>
        </div>
      </div>
    );
  }
}
