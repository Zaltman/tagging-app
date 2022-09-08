import { useState } from 'react';
import img from '../assetts/level1.jpg';
// import ChooseCharacterModal from './ChooseCharacterModal';
// import ReactModal from 'react-modal';

export default function Level1(props) {
  const [test, setTest] = useState(false);
  let handleImgClick = (e) => {
    if (test === false) {
      setTest(true);
    } else if (test === true) {
      setTest(false);
    }
    // console.log(test);
  };
  // const handleImgClick = props.handleImgClick;
  // const isModalOpen = props.isModalOpen;
  return (
    <div className="gamePage">
      <img className="gameImg" onClick={handleImgClick} src={img} alt="Find Waldo"></img>
      {/* <ChooseCharacterModal isOpen={test} />
      <ReactModal isOpen={test}>
        <ChooseCharacterModal></ChooseCharacterModal>
      </ReactModal> */}
    </div>
  );
}
