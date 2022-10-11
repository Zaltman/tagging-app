import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
export default function Register() {
  const auth = getAuth();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const watchPw1 = watch('Password');
  const watchPw2 = watch('Password2');
  const email = watch('Email');
  const fName = watch('First name');
  const lName = watch('Last name');

  const onSubmit = (e) => {
    if (watchPw1 !== watchPw2) {
      setError('Password2', { type: 'focus' }, { shouldFocus: true });
      return;
    }
    console.log(email);
    createUserWithEmailAndPassword(auth, email, watchPw2)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode);
        console.log(errorMessage);
        if (errorCode === 'auth/email-already-in-use') {
          setError('Email', { type: 'Email already registered' }, { shouldFocus: true });
        }
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
    }
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
  }
  let password2ErrMsg = '';
  if (errors.Password2) {
    password2ErrMsg = errors.Password2.type;
    if (errors.Password2.type === 'minLength') {
      password2ErrMsg = '6+ letters required';
    }
    if (errors.Password2.type === 'required') {
      password2ErrMsg = 'Required';
    }
    if (errors.Password2.type === 'focus') {
      password2ErrMsg = 'Passwords does not match';
    }
  }

  return (
    // <div> Register page</div>
    <form className=" flex justify-center w-full absolute" onSubmit={handleSubmit(onSubmit)} id="regForm">
      <div className="flex flex-col max-w-sm w-full regForm items-center">
        <label className=" text-2xl" htmlFor="fName">
          First name
        </label>
        <input
          className="text-center  rounded-md m-2 p-2"
          type="text"
          placeholder="First name"
          id="fName"
          {...register('First name', { required: true, maxLength: 80 })}
        />

        <label className=" text-2xl" htmlFor="lName">
          Last name
        </label>
        <input
          className="text-center  rounded-md m-2 p-2"
          type="text"
          id="lName"
          placeholder="Last name"
          {...register('Last name', { required: true, maxLength: 100 })}
        />

        <label className=" text-2xl" htmlFor="emailInput">
          Email
        </label>
        <input
          className="text-center  rounded-md m-2 p-2"
          type="text"
          id="emailInput"
          placeholder="Email"
          {...register('Email', { required: true, minLength: 4, pattern: /^\S+@\S+$/i })}
        />
        {errors.Email && <span>{emailErrMsg}</span>}

        <label className=" text-2xl" htmlFor="passwordInput">
          Password
        </label>
        <input
          className="text-center  rounded-md m-2 p-2"
          id="passwordInput"
          type="password"
          placeholder="Password"
          {...register('Password', { required: true, minLength: 6, maxLength: 20 })}
        />
        {errors.Password && <span>{passwordErrMsg}</span>}
        <label className=" text-2xl" htmlFor="passwordInput2">
          Repeat password
        </label>
        <input
          className="text-center  rounded-md m-2 p-2"
          id="passwordInput2"
          type="password"
          placeholder="Password"
          {...register('Password2', { required: true, minLength: 6, maxLength: 20 })}
        />
        {errors.Password2 && <span>{password2ErrMsg}</span>}

        <input
          className="text-center text-2xl mb-2 p-1 bg-red-600 rounded-md text-white mt-8 w-[286px] hover:bg-red-700"
          type="submit"
        />
        <Link
          className="text-center text-2xl mb-2 p-1 bg-red-600 rounded-md text-white mt-8 w-[286px] hover:bg-red-700"
          to={'/loginemail'}
        >
          Already Have account? Log in
        </Link>
      </div>
    </form>
  );
}
