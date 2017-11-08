import React from 'react';
import ticker from '../util/KoboldTicker';

import KoboldBar from '../components/KoboldBar';
import KoboldHatch from '../components/KoboldHatch';
import KoboldStats from '../components/KoboldStats';
import KoboldBreeding from '../components/vocations/KoboldBreeding';
import KoboldRAD from '../components/vocations/KoboldRAD';

export default class Index extends React.Component {

  constructor() {
    super();
    setInterval(function () {
      ticker();
    }, 250);
  }

  render() {
    return (
      <div id='indexContainer'>
        <div className='koboldStatistics'>
          <KoboldBar/>
          <br/>
          <KoboldHatch/>
          <KoboldStats/>
        </div>
        <hr/>
        <div className='koboldPaper'>
          <KoboldBreeding/>
          <KoboldRAD/>
        </div>
      </div>
    );
  }
}
