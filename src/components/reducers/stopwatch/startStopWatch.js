import store from '../../../store';

export default function startStopWatch() {
  store.dispatch({ type: 'startStopWatch' });
}
