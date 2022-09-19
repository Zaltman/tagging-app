import { configureStore } from '@reduxjs/toolkit';
import reducer from '../components/reducers/index';
import email from '../components/reducers/email/email';
import stopWatch from '../components/reducers/stopwatch/stopWatch';

// function emailReducer(state = { userEmail: 'Log in' }, action) {
//   if (action.type === 'changeEmail' && action.payload !== undefined) {
//     return { ...state, userEmail: action.payload };
//   } else return state;
// }

// function stopWatchReducer(state = { time: 0, running: false }, action) {
//   if (action.type === 'startStopWatch') {
//     return { ...state, running: true };
//   } else if (action.type === 'clearInterval') {
//     return { ...state, running: false, time: 0 };
//   } else return state;
// }
// let rootReducer = combineReducers({ stopWatch, email });
// console.log(rootReducer);
// const rootReducer = combineReducers({ email: emailReducer, stopWatch: stopWatchReducer });
const store = configureStore({ reducer });
console.log(store);
// console.log(store.getState());
export default store;
