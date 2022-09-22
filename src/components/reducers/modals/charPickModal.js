export default function charPickModal(state = { isOpen: false }, action) {
  let newState = { ...state };
  switch (action.type) {
    case 'openCharPickModal':
      newState.isOpen = true;
      return newState;
    case 'closeCharPickModal':
      newState.isOpen = false;
      return newState;
    default:
      return state;
  }
}
