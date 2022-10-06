import store from '../../../store';
export default function setHighscore(array) {
  store.dispatch({ type: 'storeHs', payload: array });
}
