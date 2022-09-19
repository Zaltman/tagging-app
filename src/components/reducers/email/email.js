// import store from '../../../store';
// export default function setUserEmail(emailStr) {
//   store.dispatch({ type: 'changeEmail', payload: emailStr });
// }

export default function email(state = 'Log in', action) {
  switch (action.type) {
    case 'changeEmail':
      if (action.payload !== undefined) {
        return (state = action.payload);
      } else return state;
    default:
      return state;
  }
}

// function emailReducer(state = { userEmail: 'Log in' }, action) {
//   if (action.type === 'changeEmail' && action.payload !== undefined) {
//     return { ...state, userEmail: action.payload };
//   } else return state;
// }
