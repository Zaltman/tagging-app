import { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

export default function Highscores() {
  const [highscoresArr, setHighscoresArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const handleSetVisible = (e) => {
    console.log(isVisible);
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

  // const styles = useSpring({
  //   from: {
  //     opacity: 0,
  //   },
  //   to: {
  //     opacity: 1,
  //   },
  // });
  useEffect(() => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const body = {};

    const options = {
      method: 'POST',
      headers,
      mode: 'cors',
      body: JSON.stringify(body),
    };

    fetch('https://eolrv9o90mfsiab.m.pipedream.net', options)
      .then((res) => res.json())
      .then(
        (result) => {
          const highscoresArr = result.$return_value;
          // console.log(highscoresArr);
          setHighscoresArr(highscoresArr);
          setIsLoading(false);
          setIsVisible(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // setIsLoaded(true);
          console.log(error);
        }
      );
  }, []);

  const highscoreElement = highscoresArr.map((highscoreObj, index) => {
    console.log(index);
    return (
      <div className="flex m-2 border-4 p-1 border-red-600 rounded-md " key={highscoreObj.id}>
        <div className="flex ml-2">
          <div>{index + 1}</div>
          <div className="mx-4 w-52">{highscoreObj.nickName}</div>
        </div>
        <div className=" w-52 mr-2 text-right">{highscoreObj.time / 1000} seconds</div>
      </div>
    );
  });

  // if (isLoading) {
  //   return (
  //     <div className="flex flex-col items-center justify-center m-20 font-bold rounded-lg absolute w-full">
  //       <h2>Highscores</h2>
  //       <div className="font-bold rounded-lg m-20">Loading</div>
  //     </div>
  //   );
  // }
  // else
  return (
    <div className="flex flex-col items-center justify-center absolute w-full">
      <div className="font-bold rounded-lg m-20">
        <h1>Highscores</h1>
      </div>
      <animated.div style={styles}>
        <div className="flex flex-col">{highscoreElement}</div>
      </animated.div>
    </div>
  );
}
