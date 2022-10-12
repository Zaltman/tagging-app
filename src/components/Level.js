import { useState } from 'react';
import ReactModal from 'react-modal';
import { useParams } from 'react-router-dom';
import getImgArr from '../assetts/getImgArr';
import Stopwatch from './Stopwatch';
import { useEffect } from 'react';
import startStopWatch from './reducers/stopwatch/startStopWatch';
import setCharPickModalOpen from './reducers/modals/setCharPickModalOpen';
import CharIcons from './CharIcons';
import { useSelector, getState } from 'react-redux';
import CharPickModal from './CharPickModal';
import setCharPickModalClose from './reducers/modals/setCharPickModalClose';
import SubmitHighscoreModal from './SubmitHighscoreModal';
import CheckIfAllCharsFound from './CheckIfAllCharsFound';
import stopStopWatch from './reducers/stopwatch/stopStopWatch';
import setSubmitHighscoreModalOpen from './reducers/modals/setSubmitHighscoreModalOpen';
import { toast } from 'react-toastify';
import setSubmitHighscoreModalClose from './reducers/modals/setSubmitHighscoreModalClose';
//modal style
let charPickModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    height: '400px',
    width: '250px',
    backgroundColor: '#252627ff',
    borderRadius: '10px',
  },
};
let submitHighscoreModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    height: '300px',
    width: '400px',
    backgroundColor: '#252627ff',
    borderRadius: '10px',
  },
};

export default function Level() {
  ReactModal.setAppElement('body');

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const levelId = parseInt(useParams().id);
  const isCharPickModalOpen = useSelector((state) => state.charPickModal.isOpen);
  const isHichscoreModalOpen = useSelector((state) => state.submitHighscoreModal.isOpen);
  const stopwatchIsRunning = useSelector((state) => state.stopWatch.isRunning);
  const charState = useSelector((state) => state.charPics);

  const imgArr = getImgArr();

  let handleImgClick = (e) => {
    let newCords = { ...coords };
    newCords.x = e.pageX - e.target.offsetLeft;
    newCords.y = e.pageY - e.target.offsetTop;
    console.log(newCords);
    setCoords(newCords);
    setCharPickModalOpen();
  };
  // level0 char coords
  // waldo : top left x671  y6195 bottom right x982 y6366
  // zoidberg : top left x1518 y7173 bottom right x1761 7470
  // bowser : top left x1576 y3375 bottom right x1773 y3526

  useEffect(() => {
    if (CheckIfAllCharsFound(charState) === false) {
      startStopWatch();
    } else {
      stopStopWatch();
      toast(`You found all characters. Congratulations!!!`);
      setSubmitHighscoreModalOpen();
    }
  }, [charState]);

  // useEffect(() => {
  //   console.log({ charState });
  //   if (CheckIfAllCharsFound(charState) === true) {
  //     stopStopWatch();
  //     setSubmitHighscoreModalOpen();
  //   }
  // }, [charState]);

  return (
    <div className="flex justify-center flex-grow absolute w-full top-0">
      <ReactModal
        style={submitHighscoreModalStyles}
        isOpen={isHichscoreModalOpen}
        onRequestClose={setSubmitHighscoreModalClose}
      >
        <SubmitHighscoreModal></SubmitHighscoreModal>
      </ReactModal>
      <img className="max-w-none" onClick={handleImgClick} src={imgArr[levelId].img} alt="Find Waldo"></img>
      <ReactModal style={charPickModalStyles} isOpen={isCharPickModalOpen} onRequestClose={setCharPickModalClose}>
        <CharPickModal levelId={levelId} coords={coords}></CharPickModal>
      </ReactModal>
    </div>
  );
}
