export default function stopWatch(state = { isRunning: false, time: 0 }, action) {
  switch (action.type) {
    case 'startStopWatch':
      return { ...(state.isRunning = true) };
    case 'stopStopWatch':
      return { ...(state.isRunning = false) };
    default:
      return state;
  }
}

// store.dispatch({ type: 'startStopWatch', payload: emailStr });
