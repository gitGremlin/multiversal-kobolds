import React from 'react';
import PropTypes from 'prop-types';
import store from '../stores/KoboldStore'
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import PersonAddIcon from 'material-ui-icons/PersonAdd';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function KoboldHatch(props) {
  const { classes } = props;
  function consoleLogMe() {
    store.koboldCounter++;
    console.log("Kobolds Birthed: " + store.koboldCounter)
  }

  return (
    <div>
      <IconButton
        onClick={consoleLogMe}
        className={classes.button}
        aria-label="Hatch Egg">
        <PersonAddIcon/>
      </IconButton>
    </div>
  );
}

KoboldHatch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KoboldHatch);
