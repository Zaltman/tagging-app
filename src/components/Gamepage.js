import { Link, useParams } from 'react-router-dom';
import getImgArr from '../assetts/getImgArr';

export default function GamePage() {
  const imgArr = getImgArr();
  // console.log(imgArr);
  const id = useParams().id;
  return (
    <div className="flex items-center justify-center absolute w-full">
      <div className="flex flex-col font-bold rounded-lg m-16 text-center">
        <h2 className="font-bold text-4xl rounded-lg text-center mb-10">Choose level</h2>
        {imgArr.map((img, index) => {
          let element = (
            <Link
              key={img.id}
              to={`/level/${img.id}`}
              className="text-center text-2xl w-full mb-2 p-1 bg-red-600 rounded-md text-white"
            >
              Level {index + 1}
            </Link>
          );
          return element;
        })}
        <div className=" m-8 text-xl">More coming soon</div>
      </div>
    </div>
  );
}
