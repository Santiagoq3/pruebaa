import React, { FC } from 'react'
import { Itransaction } from './Transactions';

interface TransactionProps{
  transaction: Itransaction
}
export const Transaction:FC<TransactionProps> = ({transaction}) => {
  const {id,category,date,price,type,concept} = transaction
  return (
    <>
        <div className='transaction'>
            <div className='transaction__top'>
            <p>{id}</p>
            <p>{category}</p>
            </div>
            <div className='transaction__bottom'>
            <div className='transaction__bottom__fym' >
                <p>{date}</p>
                <p>{price}</p>
            </div>
            <div className='transaction__bottom__status'>
                {type}
            </div>
            </div>
      </div>
    </>
  )
}
