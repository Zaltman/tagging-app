import { Link, useParams } from 'react-router-dom';

export default function GamePage() {
  const id = useParams().id;
  return (
    <div className="flex items-center justify-center">
      <div className="font-bold rounded-lg m-16 text-center">
        <h2 className="font-bold text-xl rounded-lg text-center mb-5">Choose level</h2>
        <Link to={`/level/${id}`} className="text-center w-full">
          Level 1
        </Link>
      </div>
    </div>
  );
}
