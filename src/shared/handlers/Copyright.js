import React from 'react';
import {Typography} from 'material-ui';

export default class Copyright extends React.Component {

  render() {
    return (
      <div id='copyrightContainer'>
        <Typography type="caption" gutterBottom align="left">
          favicon: <a href='https://thenounproject.com/icon/1387590/' target='_blank'>Dragon</a> by Icons Producer, from <a href='https://thenounproject.com/' target='_blank'>the Noun Project</a>
        </Typography>
      </div>
    );
  }
}
