import { useSelector } from 'react-redux';
import uniqid from 'uniqid';
export default function SubmitHighscoreModal() {
  const time = useSelector((state) => state.time.time);

  let handleSubmit = (e) => {
    e.preventDefault();
    const nickName = e.nativeEvent.srcElement[0].value;
    console.log(nickName);

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const body = {
      nickName: nickName,
      time: time,
      id: uniqid(),
    };
    const options = {
      method: 'POST',
      headers,
      mode: 'cors',
      body: JSON.stringify(body),
    };
    fetch('https://eontnw9q2sg3mi2.m.pipedream.net', options)
      .then((response) => response)
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="font-bold rounded-lg m-36 text-center">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nickName">Nickname:</label>
          <input type="text" name="nickName" required></input>
          <p className=" text-3xl">{time / 1000}</p>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}
