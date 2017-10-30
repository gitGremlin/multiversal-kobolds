import React from 'react';
import KoboldBar from '../components/KoboldBar';
import KoboldHatch from '../components/KoboldHatch';
import KoboldStats from '../components/KoboldStats';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <KoboldBar/>
      <br/>
        <KoboldHatch/>
        <KoboldStats/>
      </div>
    );
  }
}
