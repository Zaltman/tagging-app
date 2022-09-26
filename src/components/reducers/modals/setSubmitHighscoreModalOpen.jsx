import store from '../../../store';

export default function setSubmitHighscoreModalOpen() {
  store.dispatch({ type: 'openSubmitHighscoreModal' });
}
