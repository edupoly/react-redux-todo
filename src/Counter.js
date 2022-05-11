import React from 'react';
import { connect } from 'react-redux';
function Counter(props) {
  return (
    <div className="mybox">
      <h1>Count:{props.counter.count}</h1>
      <button
        onClick={() => {
          props.dispatch({ type: 'INCREMENT' });
        }}
      >
        Inc
      </button>
      <button>Dec</button>
    </div>
  );
}
export default connect(function (store) {
  return store;
})(Counter);
