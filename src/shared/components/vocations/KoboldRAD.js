import {observer} from 'mobx-react';
import React, {Component} from 'react';
import action from '../../actions/KoboldActions';
import store from '../../stores/KoboldStore';
import {Paper, Typography, IconButton, Button} from 'material-ui';
import {AddBox, IndeterminateCheckBox} from 'material-ui-icons/';

@observer
export default class KoboldRAD extends Component {
  handleOnClick = (type, number) => {
    action.modifyRAD(type, number);
  };

  handleTechOnClick = (type) => {
    action.researchTech(type);
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
          <div>
            <div hidden={store.getTechResearched('husbandry') || !store.techTree.husbandry.available}>
              <hr/>
              <Button
                color="primary"
                disabled={store.getTechCost('husbandry') > store.getRADScienceCount(0)}
                onClick={() => {
                  this.handleTechOnClick('husbandry');
                }}>
                Kobold Husbandry
              </Button>
            </div>
            <div hidden={store.getTechResearched('koboldSage') || !store.techTree.koboldSage.available}>
              <hr/>
              <Button
                color="primary"
                disabled={store.getTechCost('koboldSage') > store.getRADScienceCount(0)}
                onClick={() => {
                  this.handleTechOnClick('koboldSage');
                }}>
                Kobold Sage
              </Button>
            </div>
            <div hidden={store.getTechResearched('ichorExtractors') || !store.techTree.ichorExtractors.available}>
              <hr/>
              <Button
                color="primary"
                disabled={store.getTechCost('ichorExtractors') > store.getRADScienceCount(0)}
                onClick={() => {
                  this.handleTechOnClick('ichorExtractors');
                }}>
                Ichor Extractors
              </Button>
            </div>
          </div>
        </div>
      </Paper>
    );
  }
}
