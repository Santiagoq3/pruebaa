import React from 'react'
import { Transactions } from '../features/transaction/Transactions'
import "./home.scss"
import { useAppDispatch } from '../app/hooks';
import { closeModal, openModal } from '../features/modal/ModalSlice';
export const Home = () => {


  const dispatch =  useAppDispatch()

  const addTransaction = ()=>{
    dispatch(openModal())
  }

  return (
    <main className='main'>
        <div className='home__container'>
            <div>
             <h2>Balance general:</h2>
             <p>5000$</p>
            </div>
            <div className='home__container-actions'>
             <h2>filter</h2>
             <button onClick={addTransaction}>
               ADD
             </button>
            </div>
        </div>
        <Transactions />
    </main>
  )
}
