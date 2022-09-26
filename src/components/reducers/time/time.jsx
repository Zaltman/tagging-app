export default function time(state = { time: 0 }, action) {
  let newState = { ...state };
  switch (action.type) {
    case 'storeTime':
      newState.time = action.payload;
      return newState;
    case 'resetTime':
      newState.time = 0;
      return newState;
    default:
      return state;
  }
}
