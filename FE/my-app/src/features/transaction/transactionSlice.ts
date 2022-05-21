import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { Itransaction } from './Transactions';


export  interface transactionState{
    transactions: any[],

}

const initialState: transactionState = {
    transactions: []
} 

export const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers:{
        // login: (state,action:PayloadAction<authState>)=>{
        //     state.checking = false
        //     state.name = action.payload.name
        //     state.uid = action.payload.uid
        // },
        addTransaction: (state, action:PayloadAction<Itransaction>)=>{
            console.log(state.transactions)
          state.transactions.push(action.payload)
        },
        // closeModal: (state)=>{
        //     state.modalIsOpen  = false
        // },
    },
    // extraReducers: (builder)=>{
    //     builder.addCase()
    // }
})

export const {addTransaction} = transactionSlice.actions;

export const  selectTransaction = (state: RootState) => state.transaction


export default transactionSlice.reducer

