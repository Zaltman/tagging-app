// import Header from './Header';
// import Register from './Register';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import firebase from 'firebase/compat/app';
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth();

export default function Login() {
  //   const auth = getAuth();
  //   useEffect(() => {
  //     const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
  //     ui.start('.firebase-auth-container', {
  //       signInOptions: [
  //         {
  //           provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
  //           requireDisplayName: false,
  //         },
  //       ],
  //       signInSuccessUrl: '/authenticated',
  //       privacyPolicyUrl: '/privacypolicy',
  //     });
  //   }, []);
  return (
    <div className="homePage">
      <h1>Main info</h1>
      <h2>Lorem ipsum dolor sit amet.</h2>
      <h2>Id esse neque maxime itaque.</h2>
      <h2>Animi dolores maiores culpa laudantium!</h2>
    </div>
  );
}
