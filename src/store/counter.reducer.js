const initialState = {
  count: 1
};
const counterReducer = (state = initialState, action) => {
  console.log('state',state);
  console.log('action',action);
  if(action.type==='INCREMENT'){
    return {count:state.count+1}
  }
  return state;
};
export default counterReducer;