import waldoImg from '../characterpics/waldo.png';
import bowserImg from '../characterpics/bowser.png';
import zoidbergImg from '../characterpics/zoidberg.png';
import setFoundChar from './reducers/charPics/setFoundChar';
import store from '../store';
import CheckIfAllCharsFound from './CheckIfAllCharsFound';
import stopStopWatch from './reducers/stopwatch/stopStopWatch';
import setCharPickModalClose from './reducers/modals/setCharPickModalClose';
import { ToastContainer, toast } from 'react-toastify';

export default function CharPickModal(props) {
  const levelId = props.levelId;
  const coords = props.coords;
  let whichCharacter;
  let dataToSend = { level: '', character: '', coordX: undefined, cordY: undefined };
  let handleRadioPick = (e) => {
    whichCharacter = e.target.id.toLowerCase();
  };

  let handleModalClick = (e) => {};

  let handleChoiceConfirm = (e) => {
    e.preventDefault();
    if (whichCharacter === undefined) {
      alert('Chooose character');
      return;
    }
    dataToSend = { level: '', character: '', coordX: undefined, cordY: undefined };

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const body = {
      character: whichCharacter,
      level: levelId,
      coords: coords,
    };
    const options = {
      method: 'POST',
      headers,
      mode: 'cors',
      body: JSON.stringify(body),
    };
    setCharPickModalClose();
    fetch('https://eoigvwbd7a4ked9.m.pipedream.net', options)
      .then((response) => response.json())
      .then((data) => {
        let isCordsCorrect = data.isCordsCorrect;
        whichCharacter = whichCharacter.charAt(0).toUpperCase() + whichCharacter.slice(1);
        if (isCordsCorrect === true) {
          setFoundChar(whichCharacter);
          toast(`You found ${whichCharacter}`);
        } else if (isCordsCorrect === false) toast(`${whichCharacter} is not there`);
      })
      .then(() => {
        let charState = store.getState().charPics;
        if (CheckIfAllCharsFound(charState) === true) {
          toast(`You found all characters. Congratulations!!!`);

          stopStopWatch();
        }
      });
  };

  return (
    <form className="w-full h-full">
      <fieldset className="flex flex-col w-full h-full justify-center items-center">
        <legend>Choose found character</legend>
        <div className="flex items-center w-full justify-around">
          <div>
            <input type="radio" name="character" id="Waldo" onChange={handleRadioPick}></input>
            <label htmlFor="Waldo">Waldo</label>
          </div>
          <img className="h-16" src={waldoImg}></img>
        </div>
        <div className="flex items-center w-full justify-around">
          <div>
            <input type="radio" name="character" id="Bowser" onChange={handleRadioPick}></input>
            <label htmlFor="Bowser">Bowser</label>
          </div>
          <img className="h-16" src={bowserImg}></img>
        </div>
        <div className="flex items-center w-full justify-around">
          <div>
            <input type="radio" name="character" id="Zoidberg" onChange={handleRadioPick}></input>
            <label htmlFor="Zoidberg">Zoidberg</label>
          </div>
          <img className="h-16" src={zoidbergImg}></img>
        </div>
        <button
          onClick={handleChoiceConfirm}
          className="g-transparent hover:bg-blue-500 text-blue-700 font-semibold mt-8 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Confirm
        </button>
      </fieldset>
    </form>
  );
}
