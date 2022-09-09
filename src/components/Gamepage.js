import { Link } from 'react-router-dom';

export default function GamePage() {
  return (
    <div className="flex items-center justify-center">
      <div className="font-bold rounded-lg m-36 text-center">
        <h2 className="font-bold text-xl rounded-lg text-center mb-5">Choose level</h2>
        <Link to={'/level1'} className="text-center w-full">
          Level 1
        </Link>
      </div>
    </div>
  );
}
