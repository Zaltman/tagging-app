export default function highscore(state = [], action) {
  switch (action.type) {
    case 'storeHs':
      if (action.payload !== undefined) {
        return (state = action.payload);
      } else return state;
    default:
      return state;
  }
}
