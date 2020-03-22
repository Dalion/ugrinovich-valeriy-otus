import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Grid from '@material-ui/core/Grid';
import Favorites from './components/favorites/Favorites';
import Weather from './components/weather/Weather';

function App() {
  return (
      <Provider store={store}>
        <Grid container>
          <Grid item xs={12}>
            <Favorites />
          </Grid>
          <Weather/>
        </Grid>
      </Provider>
  )
}

export default App;