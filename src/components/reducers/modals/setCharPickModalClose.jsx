import store from '../../../store';

export default function setCharPickModalClose() {
  store.dispatch({ type: 'closeCharPickModal' });
}
