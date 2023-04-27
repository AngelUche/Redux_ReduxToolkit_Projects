import React from 'react'
import { clearCart } from '../features/cart/cartSlice'
import { CloseModal } from '../features/modal/ModalSlice'
import { useDispatch } from 'react-redux'

const Modal = () => {
  const dispatchAction = useDispatch();
  return (
    <aside className='modal-container'>
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button className="btn confirm-btn" type='button'
            onClick={() => {
              dispatchAction(clearCart())
              dispatchAction(CloseModal())
            }}
          >
            confirm
          </button>
          <button className="btn clear-btn" type='button'
          
          onClick={()=>dispatchAction(CloseModal())}>
            cancel
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
