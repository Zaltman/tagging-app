import { useState } from 'react';
import ReactModal from 'react-modal';
import { useParams } from 'react-router-dom';
import getImgArr from '../assetts/getImgArr';
import img from '../assetts/level1.jpg';
// import ChooseCharacterModal from './ChooseCharacterModal';
// import ReactModal from 'react-modal';

let customStyles = {
  content: {
    top: '550px',
    left: '650px',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '400px',
    width: '250px',
  },
};
export default function Level(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalStyles, setModalStyles] = useState(customStyles);
  const levelId = useParams().id;
  const imgArr = getImgArr();
  ReactModal.setAppElement('body');

  let handleImgClick = (e) => {
    openModal();
  };

  let handleModalClick = (e) => {};
  let openModal = (e) => {
    setModalIsOpen(true);
  };
  let closeModal = (e) => {
    setModalIsOpen(false);
  };
  return (
    <div className="flex justify-center flex-grow">
      <img className="max-w-none" onClick={handleImgClick} src={imgArr[levelId].img} alt="Find Waldo"></img>
      <ReactModal isOpen={modalIsOpen} onClick={handleModalClick} onRequestClose={closeModal} style={modalStyles}>
        <form className="w-full h-full">
          <fieldset className="flex flex-col w-full h-full justify-center">
            <legend>Choose found character</legend>
            <div>
              <input type="radio" name="character" id="Waldo"></input>
              <label htmlFor="Waldo">Waldo</label>
            </div>
            <div>
              <input type="radio" name="character" id="Bowser"></input>
              <label htmlFor="Bowser">Bowser</label>
            </div>
            <div>
              <input type="radio" name="character" id="Zoidberg"></input>
              <label htmlFor="Zoidberg">Zoidberg</label>
            </div>
            <button className="">Confirm</button>
          </fieldset>
        </form>
      </ReactModal>
    </div>
  );
}
