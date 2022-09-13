import { useState } from 'react';
import ReactModal from 'react-modal';
import { useParams } from 'react-router-dom';
import getImgArr from '../assetts/getImgArr';
import img from '../assetts/level1.jpg';
// import ChooseCharacterModal from './ChooseCharacterModal';
// import ReactModal from 'react-modal';

export default function Level(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const levelId = useParams().id;
  const imgArr = getImgArr();
  ReactModal.setAppElement('body');
  let handleImgClick = (e) => {
    if (modalIsOpen === false) {
      setModalIsOpen(true);
    } else if (modalIsOpen === true) {
      setModalIsOpen(false);
    }
    // console.log(test);
  };

  let handleModalClick = (e) => {
    var mousePos = {};
    mousePos.x = e.clientX - rect.left; // get the mouse position relative to the element
    mousePos.y = e.clientY - rect.top;
    if (modalIsOpen === false) {
      setModalIsOpen(true);
    } else if (modalIsOpen === true) {
      setModalIsOpen(false);
    }
  };
  let openModal = (e) => {
    setModalIsOpen(true);
  };
  let closeModal = (e) => {
    setModalIsOpen(false);
  };
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '400px',
      width: '250px',
    },
  };
  // const handleImgClick = props.handleImgClick;
  // const isModalOpen = props.isModalOpen;
  return (
    <div className="gamePage">
      <img className="gameImg" onClick={handleImgClick} src={imgArr[levelId].img} alt="Find Waldo"></img>
      {/* <ChooseCharacterModal isOpen={test} />
      <ReactModal isOpen={test}>
        <ChooseCharacterModal></ChooseCharacterModal>
      </ReactModal> */}
      <ReactModal isOpen={modalIsOpen} onClick={handleModalClick} onRequestClose={closeModal} style={customStyles}>
        <div className="">Test modal</div>
      </ReactModal>
    </div>
  );
}
