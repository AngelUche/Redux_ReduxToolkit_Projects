import React from 'react'
import {ChevronDown, ChevronUp} from '../icons'
import { removeCartItem, increase, decrease } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({ id, title, price, img, amount}) => {
  const dispatchTheAction = useDispatch()
  return (
    <article className='cart-item' key={id}>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => dispatchTheAction(removeCartItem(id))}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatchTheAction(increase({ id }))}
        >
          <ChevronUp/>
        </button>
        <p className="amount">{ amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
             // check to see if the amount is less than one,
            // if its less than one, remove the item from the list else, decrease
            if (amount === 1) {
              dispatchTheAction(removeCartItem(id))
              return;
            }
            dispatchTheAction(decrease({ id }))
          }
          
          }
        
        >
          <ChevronDown/>
        </button>
      </div>
  </article>
)
}

export default CartItem
