// Use this for reference: https://material-ui-next.com/customization/themes/#the-other-variables

import Styles from '../styles/main.scss';

const {} = Styles;

export default {
  // Palette choice
  palette: {
    type: 'dark'
  },

  // Material UI theme overrides
  overrides: {
    MuiButton: {
      dense: {
        minWidth: 0,
      },
    },
    MuiTableRow: {
      root: {
        width: '100%',
      }
    },
    MuiTableCell: {
      numeric: {
        textAlign: 'center',
        minWidth: 30,
      },
      paddingDefault: {
        padding: 3,
      },
    },

  },
};
