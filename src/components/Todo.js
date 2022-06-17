import {useState} from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [ modalIsOpen, setModalIsOpen] = useState(false);


  function deleteEvent() {
    setModalIsOpen(true);
  }

  function closeModal(){
    setModalIsOpen(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteEvent}>Delete</button>
      </div>
      { modalIsOpen && <Modal onNoButton={closeModal} onYesButton={closeModal}/>}
      { modalIsOpen && <Backdrop onCancel={closeModal} />}
    </div>
  );
}

export default Todo;
