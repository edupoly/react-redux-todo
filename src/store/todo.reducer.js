function getTodos() {
  if (!window.localStorage.getItem('todos')) {
    window.localStorage.setItem('todos', []);
    return [];
  } else {
    var temp = window.localStorage.getItem('todos').split(',');
    return [...temp];
  }
}
const initialState = {
  todos: null,
};
const todoReducer = (state = initialState, action) => {
  if (state.todos === null) {
    var tempTodos = getTodos();
    return { ...state, todos: [...tempTodos] };
  }
  if(action.type==='INITTODO'){
    
  }
  if (action.type === 'ADDTODO') {
    var tempTodos = [...state.todos, action.payload];
    window.localStorage.setItem('todos', [...tempTodos]);
    return { ...state, todos: [...tempTodos] };
  }
};
export default todoReducer;
