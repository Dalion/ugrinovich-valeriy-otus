import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  suspenseFallback : {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
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
    margin: '16px 0'
  },
  homeTitle: {
    textAlign: 'center',
    borderBottom: '1px solid gray',
    padding: '12px 0'
  },
  listItem: {
    cursor: "pointer"
  },
  forecastRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  forecastGridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  }
});

export default useStyles;