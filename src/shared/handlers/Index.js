import React from 'react';
import store from '../stores/KoboldStore'
import KoboldBar from '../components/KoboldBar';
import KoboldHatch from '../components/KoboldHatch';
import KoboldStats from '../components/KoboldStats';

export default class Index extends React.Component {
  render() {
    store.resetStore();
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
