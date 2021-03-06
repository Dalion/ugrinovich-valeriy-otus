import React, {useState} from 'react';
import useStyles from '../jss/styles';
import WeatherFrame from './frame/WeatherFrame';
import CityFavorites from './favorites/CityFavorites';
import Grid from '@material-ui/core/Grid';

function WeatherWidget() {
  const [cities, setCities] = useState([]);
  const classes = useStyles();

  const handleAdd = (city) => {
    if (cities.indexOf(city) === -1) {
      setCities([...cities, city]);
    }
  };

  return (
      <Grid container>
        <Grid item xs={12}>
          <CityFavorites
              cities={cities}
              onSubmit={handleAdd}
          />
        </Grid>
        {cities.map((city, index) => (
            <Grid item xs={12} md={3} key={index}>
              <WeatherFrame city={city} />
            </Grid>
        ))}
      </Grid>
  )
}

export default WeatherWidget