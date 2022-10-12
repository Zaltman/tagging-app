import { useSelector } from 'react-redux';
import GetAndSetHighscoreArr from './GeAndSetHighscoreArr';

import uniqid from 'uniqid';
import setSubmitHighscoreModalClose from './reducers/modals/setSubmitHighscoreModalClose';
import resetFoundChars from './reducers/charPics/resetFoundChars';
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
    setSubmitHighscoreModalClose();
    fetch('https://eontnw9q2sg3mi2.m.pipedream.net', options)
      .then((response) => response)
      .then((data) => {
        console.log(data);
        resetFoundChars();
        setTimeout(() => {
          GetAndSetHighscoreArr();
        }, 5000);
      });
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="font-bold rounded-lg  text-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="nickName" className=" text-2xl">
              Nickname:
            </label>
            <input
              type="text"
              className="text-black text-center  m-4 rounded-md text-2xl w-60"
              name="nickName"
              required
            ></input>
          </div>
          <p className=" text-3xl">{time / 1000}</p>
          <input
            className=" text-center text-2xl mb-2 p-1 bg-red-600 rounded-md text-white mt-8 w-[286px] hover:bg-red-700"
            type="submit"
            value="Submit highscore"
          ></input>
        </form>
      </div>
    </div>
  );
}
