import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CityPage from './CityPage';
import MainPage from './MainPage';

export default () => (
    <Switch>
      <Route exact path="/:city" component={CityPage} />
      <Route path="/" component={MainPage} />
    </Switch>
);