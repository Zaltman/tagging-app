import { combineReducers } from 'redux';
import email from './email/email';
import stopWatch from './stopwatch/stopWatch';
let reducer;
export default reducer = combineReducers({
  email: email,
  stopWatch: stopWatch,
});
