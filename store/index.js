import { createStore, combineReducers } from 'redux';
import origin from './origin';
import destination from './destination'
import travelTime from './travelTime';

const rootReducer = combineReducers({
  origin,
  destination,
  travelTime
});

const store = createStore(rootReducer);
export default store;
