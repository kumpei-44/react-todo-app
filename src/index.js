import React from 'react';
import {render} from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './components/TodoApp';
import {createStore} from 'redux';

// createStoreでStoreを生成する
// 引数にはReducerを指定する
const store = createStore(tasksReducer);

function renderApp(store) {
  render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}

// subscribe関数はStoreの状態を監視する
// Storeの値が変更されるたびにrenderAppが呼ばれ再レンダリングされる
store.subscribe(() => renderApp(store));
renderApp(store);