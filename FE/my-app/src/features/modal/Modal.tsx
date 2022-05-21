import React,{useState} from 'react'
import Modal from "react-modal"
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { closeModal, selectModal } from './ModalSlice';
import { useForm } from "../../hooks/useForm";
import { addTransaction } from '../transaction/transactionSlice';
export const ModalCustom = () => {

  const dispatch = useAppDispatch()
  const {modalIsOpen} = useAppSelector(selectModal)


  const [select, setSelect] = useState("ingreso")

  const {amount,concept,handleInputChange} =  useForm({
    concept: "",
    amount: ""
  })


  const closeModalApp = ()=>{
    dispatch(closeModal())
  }

  
  const selectHandleChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    const v = e.target.value
    setSelect(v)
  }

  const handleSendForm = (e: React.FormEvent)=>{
    e.preventDefault()

    const newTransaction = {
      id: "#789789",
      date: "25 feb 2022",
      category: "comida",
      concept,
      price:amount,
      type: select
    }
    dispatch(addTransaction(newTransaction))
    // aqui dispatch

    console.log(newTransaction)

  }
  
  
  Modal.setAppElement("#root")
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModalApp}
        // style={customStyles}
        closeTimeoutMS={200}
        contentLabel="Example Modal"
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content: {
            // position: 'absolute',
            // top: '40px',
            // left: '40px',
            // right: '40px',
            // bottom: '40px',
            // border: '1px solid #ccc',
            // background: '#fff',
            // overflow: 'auto',
            // WebkitOverflowScrolling: 'touch',
            // borderRadius: '4px',
            // outline: 'none',
            // padding: '20px'
          }
        }}
        // className={"modal"}
        // overlayClassName={"modal-fondo"}
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button> */}
        <div className='modal_top'>
          <p>Ingrese los datos </p>
          <button onClick={closeModalApp}>X</button>
        </div>
        <form onSubmit={handleSendForm} className='form'>
          <input onChange={handleInputChange} name='concept' value={concept} autoFocus type={"text"} placeholder={"ingrese el concepto..."} />
          <input onChange={handleInputChange} name='amount' value={amount} type={'text'} placeholder={"ingrese el monto..."} />
          <label>Tipo:</label>
          <select value={select} onChange={selectHandleChange}>
            <option  value={"ingreso"}>Ingreso</option>
            <option value={"egreso"}>Egreso</option>
          </select>
          <button type='submit'>Agregar</button>
        </form>
      </Modal>
    </>
  )
}
