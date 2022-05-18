import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import Modal from "react-modal"
import { useAppDispatch, useAppSelector } from '../src/app/hooks';
import { closeModal, selectModal } from './features/modal/ModalSlice';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



Modal.setAppElement("#root")
function App() {

  const {modalIsOpen} = useAppSelector(selectModal)
  const dispatch = useAppDispatch()
  console.log(modalIsOpen)
  const closeModalApp = ()=>{
    dispatch(closeModal())
  }
  return (
    <div className="App">
     <Navbar />
     <Home />
     <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button> */}
        <div>I am a modal</div>
        <button onClick={closeModalApp}>X</button>
        <form>
          <input />
         
          <button>Agregar</button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
