import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  card: {
    minWidth: '335px',
    maxWidth: '335px',
    margin: '16px auto'
  },
  cardActions: {
    margin: '16px',
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    margin: '16px'
  },
  listItem: {
    cursor: "pointer"
  }
});

export default useStyles;