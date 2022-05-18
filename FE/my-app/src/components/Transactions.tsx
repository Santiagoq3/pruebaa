import React from 'react'
import "./transactions.scss"
export const Transactions = () => {
  return (
    <div className='transactions'>
      <div className='transaction'>
        <div className='transaction__top'>
          <p>#100007</p>
          <p>Comidas</p>
        </div>
        <div className='transaction__bottom'>
          <div className='transaction__bottom__fym' >
            <p>20 feb 2022</p>
            <p>2500$</p>
          </div>
          <div className='transaction__bottom__status'>
            Ingreso
          </div>
        </div>
      </div>
    </div>
  )
}
