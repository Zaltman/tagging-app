import store from '../store';

export default function setUserEmail(emailStr) {
  store.dispatch({ type: 'changeEmail', payload: emailStr });
}
