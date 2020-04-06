import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {LinearProgress} from '@material-ui/core';
import Favorites from './favorites/Favorites';

function Layout({children}) {
  const [loading, setLoading] = useState();

  return (
      <Grid container>
        <Grid item xs={12} lg={3}>
          <Favorites setLoading={setLoading}/>
        </Grid>
        <Grid item xs={12} lg={9}>
          {loading
              ? <LinearProgress variant="query"/>
              : children
          }
        </Grid>
      </Grid>
  );
}

export default Layout;