import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Welcome() {
  const userEmail = useSelector((state) => state.email);
  return (
    <div className="flex flex-col items-center justify-center m-8 absolute w-full">
      <div className="m-8 text-4xl">Welcome</div>
      <div className="font-bold text-2xl rounded m-2"> {userEmail} </div>
      <div className="  m-28 ">
        <Link
          to={'/gamepage'}
          className="text-center text-2xl mb-2 p-2 pr-4 pl-4 bg-red-600 rounded-md text-white mt-8 w-[286px] hover:bg-red-700"
        >
          Play
        </Link>
      </div>
    </div>
  );
}
