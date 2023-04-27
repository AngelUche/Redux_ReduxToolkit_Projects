import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './cartItem'
import { OpenModal } from '../features/modal/ModalSlice'

const CartContainer = () => {

  const dispatch = useDispatch();
  const {TotalChosenItem, CartItems, amount} = useSelector((store)=>store.cart)
 
  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
    </section>
  )
  };
  return (
    <section className='cart'>
      <header>
      <h2>your Bag</h2>
      </header>
      <div>
        {CartItems.map((item) => {
          return (
              
            <CartItem key={item.id}  {...item} />
          )
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
        <h4>
            total <span>$ { TotalChosenItem}</span>
        </h4>
        </div>
        <button className='btn clear-btn'
          onClick={() => dispatch(OpenModal())}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
