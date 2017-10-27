import React from 'react';
import store from '../stores/KoboldStore'

function KoboldStats() {
  return (
    <div>
      Kobolds Birthed: {store.koboldCounter}
    </div>
  );
}

export default KoboldStats;
