import store from '../../../store';

export default function stopStopWatch() {
  store.dispatch({ type: 'stopStopWatch' });
}
