import store from '../../../store';

//charName options : Waldo Bowser Zoidberg
export default function resetFoundChars() {
  store.dispatch({ type: `reset` });
}
