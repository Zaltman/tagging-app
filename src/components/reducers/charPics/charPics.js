export default function charPics(
  state = { waldoIsFound: false, bowserIsFound: false, zoidbergIsFound: false },
  action
) {
  let newState = { ...state };
  switch (action.type) {
    case 'foundWaldo':
      newState.waldoIsFound = true;
      return newState;
    case 'foundBowser':
      newState.bowserIsFound = true;
      return newState;
    case 'foundZoidberg':
      newState.zoidbergIsFound = true;
      return newState;
    case 'reset':
      newState.zoidbergIsFound = false;
      newState.waldoIsFound = false;
      newState.bowserIsFound = false;
      return newState;
    default:
      return state;
  }
}

// store.dispatch({ type: 'startStopWatch', payload: emailStr });
