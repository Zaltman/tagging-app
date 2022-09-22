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

//modal style
let customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    height: '400px',
    width: '250px',
  },
};
export default function Level() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const levelId = parseInt(useParams().id);
  const imgArr = getImgArr();
  ReactModal.setAppElement('body');
  const isCharPickModalOpen = useSelector((state) => state.charPickModal.isOpen);
  let handleImgClick = (e) => {
    let newCords = { ...coords };
    newCords.x = e.pageX - e.target.offsetLeft;
    newCords.y = e.pageY - e.target.offsetTop;
    setCoords(newCords);
    setCharPickModalOpen();
  };

  // level0 char coords
  // waldo : top left x671  y6195 bottom right x982 y6366
  // zoidberg : top left x1518 y7173 bottom right x1761 7470
  // bowser : top left x1576 y3375 bottom right x1773 y3526

  useEffect(() => {
    startStopWatch();
  });
  return (
    <div className="flex justify-center flex-grow">
      <CharIcons></CharIcons>
      <Stopwatch></Stopwatch>
      <img className="max-w-none" onClick={handleImgClick} src={imgArr[levelId].img} alt="Find Waldo"></img>
      <ReactModal style={customStyles} isOpen={isCharPickModalOpen} onRequestClose={setCharPickModalClose}>
        <CharPickModal levelId={levelId} coords={coords}></CharPickModal>
      </ReactModal>
    </div>
  );
}
