import store from '../../../store';
export default function resetTime() {
  store.dispatch({ type: 'resetTime' });
}
