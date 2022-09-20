import { combineReducers } from 'redux';
import email from './email/email';
import stopWatch from './stopwatch/stopWatch';
import charPics from './charPics/charPics';
let reducer;
export default reducer = combineReducers({
  email: email,
  stopWatch: stopWatch,
  charPics: charPics,
});
