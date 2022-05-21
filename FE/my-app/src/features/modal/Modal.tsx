import React,{useState} from 'react'
import Modal from "react-modal"
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { closeModal, selectModal } from './ModalSlice';
import { useForm } from "../../hooks/useForm";
export const ModalCustom = () => {

  const {modalIsOpen} = useAppSelector(selectModal)

  const dispatch = useAppDispatch()
  const [select, setSelect] = useState("")
  const [values,handleInputChange] =  useForm({
    concept: "",
    amount: ""
  })

  console.log(values)

  const closeModalApp = ()=>{
    dispatch(closeModal())
  }

  
  const selectHandleChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
    const v = e.target.value
    setSelect(v)
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
        <form className='form'>
          <input name='concept' autoFocus type={"text"} placeholder={"ingrese el concepto..."} />
          <input name='amount' type={'number'} placeholder={"ingrese el monto..."} />
          <label>Tipo:</label>
          <select onChange={selectHandleChange}>
            <option  value={"ingreso"}>Ingreso</option>
            <option value={"egreso"}>Egreso</option>
          </select>
          <button>Agregar</button>
        </form>
      </Modal>
    </>
  )
}
