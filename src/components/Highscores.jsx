import { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';
import GetAndSetHighscoreArr from './GeAndSetHighscoreArr';
import { useSelector } from 'react-redux';
import { GiPodiumWinner, GiPodiumSecond, GiPodiumThird } from 'react-icons/gi';
import { ReactComponent as BtnRefresh } from '../assetts/btnRefresh.svg';

export default function Highscores() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const highscoresArr = useSelector((state) => state.highscore);
  let highscoreElement;
  if (highscoresArr !== undefined && isVisible == false) {
    setIsVisible(true);
  }
  const handleSetVisible = (e) => {
    if (isVisible === true) {
      setIsVisible(false);
    } else if (isVisible === false) {
      setIsVisible(true);
    }
  };

  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
    config: { precision: 0.0001 },
  });

  const firstPlaceEl = (
    <GiPodiumWinner className="flex justify-around text-6xl -ml-2 -mr-8  fill-amber-400 "></GiPodiumWinner>
  );
  const secondPlaceEl = (
    <GiPodiumSecond className="flex justify-around text-6xl -ml-2 -mr-8  fill-neutral-400"></GiPodiumSecond>
  );
  const thirdPlaceEl = (
    <GiPodiumThird className="flex justify-around text-6xl -ml-2 -mr-8  fill-amber-800"></GiPodiumThird>
  );

  useEffect(() => {}, []);
  if (highscoresArr !== undefined) {
    highscoreElement = highscoresArr.map((highscoreObj, index) => {
      return (
        <div
          className="flex m-2 border-4 p-1 border-red-600 rounded-md items-center justify-around"
          key={highscoreObj.id}
        >
          <div className="flex ml-2 items-center ">
            <div className=" ">
              {index + 1 == 1
                ? firstPlaceEl
                : index + 1 == 2
                ? secondPlaceEl
                : index + 1 == 3
                ? thirdPlaceEl
                : index + 1}
            </div>
            <div className="mx-4 w-52 text-2xl ml-12 text-white font-bold">{highscoreObj.nickName}</div>
          </div>
          <div className=" w-52 mr-2 text-right">{highscoreObj.time / 1000} seconds</div>
        </div>
      );
    });
  } else {
    highscoreElement = <div className=" border-red-500">Loading</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center absolute w-full">
      <div className="font-bold rounded-lg m-16 ">
        <h1 className=" mb-2 text-3xl">Highscores</h1>
      </div>
      <button>
        <BtnRefresh
          className=" transition-all ease-in-out hover:animate-spin"
          fill="rgb(220 38 38)"
          onClick={GetAndSetHighscoreArr}
        />
      </button>
      <animated.div style={styles}>
        <div className="flex flex-col ">{highscoreElement}</div>
      </animated.div>
    </div>
  );
}
