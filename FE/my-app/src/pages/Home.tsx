import React from 'react'
import { Transactions } from '../components/Transactions'
import "./home.scss"
export const Home = () => {
  return (
    <main className='main'>
        <div className='home__container'>
            <div>
             <h2>Balance general:</h2>
             <p>5000$</p>
            </div>
            <div className='home__container-actions'>
             <h2>filter</h2>
             <button>
               ADD
             </button>
            </div>
        </div>
        <Transactions />
    </main>
  )
}
