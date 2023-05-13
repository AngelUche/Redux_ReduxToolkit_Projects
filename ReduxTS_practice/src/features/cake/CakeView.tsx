import { useSelector ,useDispatch} from "react-redux";
import { ordered, restocked } from "./cakeSlice";
const CakeView = () => {

  // getting the state of the application (numberOfCakespeare) using the useSelector property
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Cake = {numberOfCakes}</h2>
      {/* dispatching the action odered using the usedispatch hook  */}
      <button onClick={()=>dispatch(ordered())}>order a cake</button>
      <button onClick={()=>dispatch(restocked(4))}>Restock the cake</button>
    </div>
  );
};

export default CakeView;
