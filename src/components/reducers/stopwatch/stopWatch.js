export default function stopWatch(state = { isRunning: false, time: 0 }, action) {
  let newState = { ...state };
  switch (action.type) {
    case 'startStopWatch':
      newState.isRunning = true;
      return newState;
    case 'stopStopWatch':
      newState.isRunning = false;
      return newState;
    default:
      return state;
  }
}

// store.dispatch({ type: 'startStopWatch', payload: emailStr });
