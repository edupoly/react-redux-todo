import React from 'react';
import './style.css';
import Counter from './Counter';
import Todo from './Todo';
import { Provider } from 'react-redux';
import store from './store';
export default function App() {
  return (
    <Provider store={store}>
      <div className="mybox">
        <h1>Hello StackBlitz!</h1>
        <Todo></Todo>
      </div>
    </Provider>
  );
}
