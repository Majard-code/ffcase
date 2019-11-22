import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mamaSaga from './sagas';
import app from './reducers/app';
import filters from './reducers/filters';

const reducer = combineReducers({
  app,
  filters,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
window.s = store;
sagaMiddleware.run(mamaSaga);

export default store;