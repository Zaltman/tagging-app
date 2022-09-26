import store from '../../../store';

export default function setSubmitHighscoreModalClose() {
  store.dispatch({ type: 'closeSubmitHighscoreModal' });
}
