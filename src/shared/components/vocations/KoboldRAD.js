import {observer} from 'mobx-react';
import React, {Component} from 'react';
import action from '../../actions/KoboldActions';
import store from '../../stores/KoboldStore';
import KoboldRADButton from '../buttons/KoboldRADButton';
import {Paper, Typography, IconButton, Button} from 'material-ui';
import {AddBox, IndeterminateCheckBox} from 'material-ui-icons/';

@observer
export default class KoboldRAD extends Component {
  handleOnClick = (type, number) => {
    action.modifyRAD(type, number);
  };

  generateTech = () => {
    let techsArr = [];
    let count = 0;
    for (let tech in store.techTree) {
      if (!store.getTechResearched(tech) && store.techTree[tech].available) {
        count++;
        techsArr.push(<KoboldRADButton key={count} name={tech}/>);
      }
    }
    if (techsArr.length !== 0) techsArr.splice(0, 0, <hr key={0}/>);
    return techsArr;
  };

  render() {
    const hidden = store.getKoboldCount() < 10;

    const style = {
      padding: 16,
      margin: 10,
      width: 300,
      float: 'left'
    };

    const scientistCount = store.getRADCount('scientist');

    const addDisabled = (store.getKoboldEmployedCount() >= store.getKoboldCount());
    const reduceDisabledScientist = scientistCount === 0;

    const sciencePerSecond = store.getRADSciencePerTick() * 4;


    return (
      <Paper elevation={4} style={style} hidden={hidden}>
        <div>
          <Typography type="headline" component="h3" align="center">
            Research & Development
          </Typography>
          <div>
            <Typography type="body1" component="p">
              Research Ichor: {store.getRADScienceCount(0)}/{store.getRADScienceCount(1)} (+ {sciencePerSecond}/s)
            </Typography>
            <hr/>
          </div>
          <Typography type="body1" component="p">
            <IconButton
              disabled={reduceDisabledScientist}
              onClick={() => {
                this.handleOnClick('scientist', -1);
              }}>
              <IndeterminateCheckBox/>
            </IconButton>
            <IconButton
              disabled={addDisabled}
              onClick={() => {
                this.handleOnClick('scientist', +1);
              }}>
              <AddBox/>
            </IconButton>
            Ichor Enthusiasts: {scientistCount}
          </Typography>

          {[...this.generateTech()]}
        </div>
      </Paper>
    );
  }
}
