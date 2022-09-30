import { useEffect, useState } from 'react';

export default function Highscores() {
  const [highscoresArr, setHighscoresArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
          console.log(highscoresArr);
          setHighscoresArr(highscoresArr);
          setIsLoading(false);
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

  const highscoreElement = highscoresArr.map((highscoreObj) => {
    console.log(highscoreObj);
    return (
      <div className="flex m-4" key={highscoreObj.id}>
        <div className="mx-4">{highscoreObj.nickName}</div>
        <div>{highscoreObj.time / 1000} seconds</div>
      </div>
    );
  });

  if (isLoading) {
    return <div className="flex flex-col items-center justify-center m-20">Loading</div>;
  } else
    return (
      <div className="flex flex-col items-center justify-center ">
        <div className="font-bold rounded-lg m-20">
          <h1>Highscores</h1>
        </div>
        <div className="flex flex-col">{highscoreElement}</div>
      </div>
    );
}
