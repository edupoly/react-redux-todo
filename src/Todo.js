import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './store/actions';
function Todo(props) {
  const { todos } = props.todos;
  const [newTodo, setNewTodo] = React.useState('');
  return (
    <div className="mybox">
      <h4>Todo List</h4>
      <input
        type="text"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.dispatch(addTodo(newTodo));
        }}
      >
        Add Todo
      </button>
      {todos && todos.map((todo, i) => {
        return <li key={i}>{todo}</li>;
      })}
    </div>
  );
}
export default connect((store) => store)(Todo);
