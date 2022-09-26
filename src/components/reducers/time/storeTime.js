import store from '../../../store';
export default function storeTime(time) {
  store.dispatch({ type: 'storeTime', payload: time });
}
