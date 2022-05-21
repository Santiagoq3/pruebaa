import React from 'react'
import { Transaction } from './Transaction'
import "./transactions.scss"

const mockTransaction = [
  {
    id: "#100007",
    category: "Comidas",
    date:"20 feb 2020",
    price: 2500,
    type: "Ingreso"
  },
  {
    id: "#100007",
    category: "Comidas",
    date:"20 feb 2020",
    price: 2500,
    type: "Ingreso"
  },
]

export interface Itransaction {
    id: string,
    category: string,
    date:string,
    price: number,
    type: string
}

export const Transactions = () => {

  
  return (
    <div className='transactions'>
      {
        mockTransaction.map(t => {
          return <Transaction transaction={t} />
        })
      }
    </div>
  )
}
