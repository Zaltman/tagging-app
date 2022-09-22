import store from '../../../store';

export default function setCharPickModalOpen() {
  store.dispatch({ type: 'openCharPickModal' });
}
