import store from '../../../store';
export default function setUserEmail(string) {
  store.dispatch({ type: 'changeEmail', payload: string });
}
