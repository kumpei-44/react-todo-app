import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {Route} from 'react-router-dom';
import TodoApp from './containers/TodoApp';
import Error from './components/Error';
import createStore from './store';
import {ConnectedRouter} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();
const store = createStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={TodoApp} />
        <Route path="/error" component={Error} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
