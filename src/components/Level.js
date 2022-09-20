import { useState } from 'react';
import ReactModal from 'react-modal';
import { useParams } from 'react-router-dom';
import getImgArr from '../assetts/getImgArr';
import img from '../assetts/level1.jpg';
import waldoImg from '../characterpics/waldo.png';
import bowserImg from '../characterpics/bowser.png';
import zoidbergImg from '../characterpics/zoidberg.png';
import Stopwatch from './Stopwatch';
import { useEffect } from 'react';
import startStopWatch from './reducers/stopwatch/startStopWatch';

let customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '400px',
    width: '250px',
  },
};
export default function Level() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const levelId = parseInt(useParams().id);
  const imgArr = getImgArr();
  ReactModal.setAppElement('body');

  let dataToSend = { level: '', character: '', coordX: undefined, cordY: undefined };

  let handleImgClick = (e) => {
    let newCords = { ...coords };
    // console.log(newCords);
    newCords.x = e.pageX - e.target.offsetLeft;
    newCords.y = e.pageY - e.target.offsetTop;
    setCoords(newCords);
    console.log(coords);
    // coordsX = e.pageX - e.target.offsetLeft;
    // coordsY = e.pageY - e.target.offsetTop;
    // console.log(coordsX);

    openModal();
  };

  // level0 char coords
  // waldo : top left x671  y6195 bottom right x982 y6366
  // zoidberg : top left x1518 y7173 bottom right x1761 7470
  // bowser : top left x1576 y3375 bottom right x1773 y3526

  let handleModalClick = (e) => {};
  let openModal = (e) => {
    setModalIsOpen(true);
  };
  let closeModal = (e) => {
    setModalIsOpen(false);
  };
  let whichCharacter;
  let handleRadioPick = (e) => {
    whichCharacter = e.target.id.toLowerCase();
  };
  let handleChoiceConfirm = (e) => {
    e.preventDefault();
    if (whichCharacter === undefined) {
      alert('Chooose character');
      return;
    }
    dataToSend = { level: '', character: '', coordX: undefined, cordY: undefined };
    console.log({ whichCharacter });
    console.log({ coords });
    console.log({ levelId });

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
    // level[1] = {};
    closeModal();
    console.log(options.body);
    fetch('https://eoigvwbd7a4ked9.m.pipedream.net', options)
      .then((response) => response.json())
      .then((data) => {
        let isCordsCorrect = data.isCordsCorrect;
        // console.log(isCordsCorrect);
        if (isCordsCorrect === true) alert(`You found ${whichCharacter}`);
        else if (isCordsCorrect === false) alert(`Its not ${whichCharacter}`);
      });
  };
  useEffect(() => {
    startStopWatch();
  });
  return (
    <div className="flex justify-center flex-grow">
      <Stopwatch></Stopwatch>
      <img className="max-w-none" onClick={handleImgClick} src={imgArr[levelId].img} alt="Find Waldo"></img>
      <ReactModal isOpen={modalIsOpen} onClick={handleModalClick} onRequestClose={closeModal} style={customStyles}>
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
      </ReactModal>
    </div>
  );
}
