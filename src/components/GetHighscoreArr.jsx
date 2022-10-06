import setHighscore from './reducers/highscore/setHighscore';

export default function GetHighscoreArr() {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let highscoresArr;
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
        highscoresArr = result.$return_value;
        setHighscore(highscoresArr);
        return highscoresArr;
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        // setIsLoaded(true);
        console.log(error);
      }
    );
  return highscoresArr;
}
