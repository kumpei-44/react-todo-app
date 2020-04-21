import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import tasksReducer from '../reducers/tasks';
import {createLogger} from 'redux-logger';

const loggerSetting = {
  predicate: (getState, action) => action.type !== 'INPUT_TASK'
};

const logger = createLogger(loggerSetting);

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      tasks: tasksReducer,
      router: routerReducer
    }),
    applyMiddleware(
      routerMiddleware(history),
      logger
    )
  );
}