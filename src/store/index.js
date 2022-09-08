import { configureStore } from '@reduxjs/toolkit';

function emailReducer(state = { userEmail: 'Log in' }, action) {
  if (action.type === 'changeEmail' && action.payload !== undefined) {
    return { ...state, userEmail: action.payload };
  } else return state;
}

const store = configureStore({ reducer: emailReducer });
// store.dispatch({ type: 'changeEmail', payload: 'test setEmail' });
// console.log(store.getState());
export default store;
