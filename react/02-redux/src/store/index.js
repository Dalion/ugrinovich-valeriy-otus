import {applyMiddleware, createStore} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import {weatherApi} from '../service';
import {composeEnhancers} from './utils';

export default createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument(weatherApi))
    )
);
