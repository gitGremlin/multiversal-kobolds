import React from 'react';
import ticker from '../util/KoboldTicker';
import KoboldBar from '../components/KoboldBar';
import KoboldHatch from '../components/KoboldHatch';
import KoboldStats from '../components/KoboldStats';
import KoboldBreeding from '../components/KoboldBreeding';

export default class Index extends React.Component {

  constructor() {
    super();
    setInterval(function () {
      ticker();
    }, 250);
  }

  render() {
    return (
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
        </div>
      </div>
    );
  }
}
