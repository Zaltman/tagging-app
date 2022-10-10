import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Login() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const userEmail = useSelector((state) => state.email);
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const watchEmail = watch('Email');
  const watchPw = watch('Password');

  let onSubmit = (e) => {
    signInWithEmailAndPassword(auth, watchEmail, watchPw)
      .then((userCredential) => {
        // Signed in
        console.log('ain');
        const user = userCredential.user;
        console.log(user);
        window.location.href = '/welcome';
      })
      .catch((error) => {
        console.log('nain');
        const errorCode = error.code;
        const errorMessage = error.message;
        setError('Password', { type: errorCode }, { shouldFocus: true });
        console.log(errors.Password);
        passwordErrMsg = errorCode;
      });
  };
  let handleGoogleLoginClick = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        window.location.href = '/welcome';

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  let emailErrMsg = '';
  if (errors.Email) {
    emailErrMsg = errors.Email.type;
    if (errors.Email.type === 'minLength') {
      emailErrMsg = 'Too short';
    }
    if (errors.Email.type === 'required') {
      emailErrMsg = 'Required';
    }
    if (errors.Email.type === 'pattern') {
      emailErrMsg = 'Incorrect format';
    } else if (emailErrMsg === '') emailErrMsg = errors.Email.type;
  }
  let passwordErrMsg = '';
  if (errors.Password) {
    passwordErrMsg = errors.Password.type;
    if (errors.Password.type === 'minLength') {
      passwordErrMsg = '6+ letters required';
    }
    if (errors.Password.type === 'required') {
      passwordErrMsg = 'Required';
    }
    if (errors.Password.type === 'auth/wrong-password') {
      passwordErrMsg = 'Incorrect password';
    }

    if (errors.Password.type === 'auth/user-not-found') {
      passwordErrMsg = 'No user with this email';
    } else if (passwordErrMsg === '') passwordErrMsg = errors.Password.type;
  }
  if (userEmail === 'Log in') {
    return (
      <div className="absolute w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center text-center" id="regForm">
          <p className="">Login with email and password </p>
          <label htmlFor="emailInput">Email</label>
          <input
            type="text"
            id="emailInput"
            placeholder="Email"
            {...register('Email', { required: true, minLength: 4, pattern: /^\S+@\S+$/i })}
          />
          {errors.Email && <span>{emailErrMsg}</span>}
          <label htmlFor="passwordInput">Password</label>
          <input
            id="passwordInput"
            type="password"
            placeholder="Password"
            {...register('Password', { required: true, minLength: 6, maxLength: 20 })}
          />
          {errors.Password && <span>{passwordErrMsg}</span>}
          <input type="submit" />
          <Link to={'/register'}>No account? Register</Link>
          <button
            onClick={handleGoogleLoginClick}
            type="button"
            class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-base px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 m-2 "
          >
            <svg
              class="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
        </form>
      </div>
    );
  } else {
    return <div>Already logged in</div>;
  }
}
