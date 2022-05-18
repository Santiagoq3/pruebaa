import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { useAppDispatch } from '../../app/hooks';
import { fetchConToken, fetchSinToken } from '../../helpers/fetch';


export interface modalState {
    modalIsOpen: boolean

}

const initialState: modalState = {
    modalIsOpen: false
}


export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers:{
        // login: (state,action:PayloadAction<authState>)=>{
        //     state.checking = false
        //     state.name = action.payload.name
        //     state.uid = action.payload.uid
        // },
        openModal: (state)=>{
            state.modalIsOpen  = true
        },
        closeModal: (state)=>{
            state.modalIsOpen  = false
        },
    },
    // extraReducers: (builder)=>{
    //     builder.addCase()
    // }
})


// export const startLogout = ():AppThunk=>{
//     return (dispatch)=>{
//         localStorage.clear();
//         dispatch(logout())
//      }
// }

export const selectModal = (state: RootState)=>state.modal
export const {openModal,closeModal} = modalSlice.actions

export default modalSlice.reducer
