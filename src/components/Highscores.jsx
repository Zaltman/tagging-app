// import Header from './Header';
// import Register from './Register';
export default function Highscores() {
  const getHighscores = async (e) => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const body = {
      test: 'event',
    };

    const options = {
      method: 'POST',
      headers,
      mode: 'cors',
      body: JSON.stringify(body),
    };

    fetch('https://eolrv9o90mfsiab.m.pipedream.net', options)
      .then((response) => response)
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="flex items-center justify-center">
      <div className="font-bold rounded-lg m-36">
        <h1>Highscores</h1>
        <button onClick={getHighscores}>Fetch highscores</button>
      </div>
    </div>
  );
}
