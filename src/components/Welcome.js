import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Welcome() {
  const userEmail = useSelector((state) => state.email);
  return (
    <div className="flex flex-col items-center justify-center m-8">
      <div className="m-8">Welcome</div>
      <div className="font-bold rounded m-2"> {userEmail} </div>
      <div className="font-bold rounded-lg m-28 text-center">
        <Link
          to={'/gamepage'}
          className="g-transparent hover:bg-blue-500 text-blue-700 font-semibold m-16 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Play
        </Link>
      </div>
    </div>
  );
}
