import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { Transaction } from './Transaction'
import "./transactions.scss"
import { selectTransaction } from './transactionSlice';
import transactionSlice from './transactionSlice';

const mockTransaction = [
  {
    id: "#100007",
    category: "Comidas",
    date:"20 feb 2020",
    price: "2500",
    type: "Ingreso"
  },
  {
    id: "#100007",
    category: "Comidas",
    date:"20 feb 2020",
    price: "2500",
    type: "Ingreso"
  },
 
]

export interface Itransaction {
    id: string,
    category: string,
    date:string,
    concept: string
    price: string,
    type: string
}

export const Transactions = () => {

  const {transactions} = useAppSelector(selectTransaction)
  console.log(transactions)
  return (
    <div className='transactions'>
      {
        transactions.map(t => {
          return <Transaction transaction={t} />
        })
      }
    </div>
  )
}
