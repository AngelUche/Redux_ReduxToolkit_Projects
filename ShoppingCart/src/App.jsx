
import { Navbar } from "./components";
import { CartContainer } from './components'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotal , getCartItems} from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const dispatchItems = useDispatch()
  const { CartItems, isLoading } = useSelector((store) => store.cart)
  const { isModalOpen  } = useSelector((store) => store.modal)

  useEffect(() => {
    dispatchItems(getCartItems());
  }, []);

  useEffect(() => {
    // anytime there s a change in cartitems, we will dispatch the total items
    dispatchItems(calculateTotal())
  }, [CartItems])

  
  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  
  return (
    <main>
      {isModalOpen && <Modal/>}
      <Navbar />
      <CartContainer/>
    </main>
  )
}
export default App;
