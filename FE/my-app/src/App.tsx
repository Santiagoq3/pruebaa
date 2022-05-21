import React, { useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ModalCustom } from './features/modal/Modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // padding: "1em"
  },
};

function App() {

  
  // console.log(select)
  return (
    <div className="App">
     <Navbar />
     <Home />
     <ModalCustom />
     
    </div>
  );
}

export default App;
