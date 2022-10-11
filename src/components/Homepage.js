// import Header from './Header';

import { Link } from 'react-router-dom';

// import Register from './Register';
export default function Homepage() {
  return (
    <div className="flex items-center justify-center absolute w-full">
      <div className="font-bold rounded-lg m-36 text-center">
        <h1 className=" text-6xl  inline-block mb-10 text-center ">
          find<div className=" text-6xl text-white inline-block">Them</div>
        </h1>
        {/* <h2>Find all characters </h2> */}
        <div>
          <Link className=" text-4xl " to="/level/0">
            Play
          </Link>
        </div>
      </div>
    </div>
  );
}
