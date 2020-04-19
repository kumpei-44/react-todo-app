import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';
import {createStore} from 'redux';

// createStoreでStoreを生成する
// 引数にはReducerを指定する
const store = createStore(tasksReducer);

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);

// Storeのsubscribeでコンポーネントの再描画を行っていた処理を削除