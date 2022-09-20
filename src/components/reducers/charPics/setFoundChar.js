import store from '../../../store';

//charName options : Waldo Bowser Zoidberg
export default function setFoundChar(charName) {
  store.dispatch({ type: `found${charName}` });
}
