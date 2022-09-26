import { combineReducers } from 'redux';
import email from './email/email';
import stopWatch from './stopwatch/stopWatch';
import charPics from './charPics/charPics';
import charPickModal from './modals/charPickModal';
import submitHighscoreModal from './modals/submitHighscoreModal';
import time from './time/time';
let reducer;
export default reducer = combineReducers({
  email: email,
  stopWatch: stopWatch,
  charPics: charPics,
  charPickModal: charPickModal,
  submitHighscoreModal: submitHighscoreModal,
  time: time,
});
