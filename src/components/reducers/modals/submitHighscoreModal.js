export default function submitHighscoreModal(state = { isOpen: false }, action) {
  let newState = { ...state };
  switch (action.type) {
    case 'openSubmitHighscoreModal':
      newState.isOpen = true;
      return newState;
    case 'closeSubmitHighscoreModal':
      newState.isOpen = false;
      return newState;
    default:
      return state;
  }
}
