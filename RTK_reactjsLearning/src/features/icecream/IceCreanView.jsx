import { useSelector, useDispatch } from "react-redux";
import { SoldIceCream, boughtIcecream } from "./iceCreamSlice";
import React from "react";

const IceCreanView = () => {

  const [number, setVallue] = React.useState(1)
  const [name, setName] = React.useState('')
  function hadlechange(e) {
    setName(e.target.value)
    console.log(e.target.value);
  }

  const NumberOfIcecream = useSelector(state=>state.iceCreame.NumberOfIcecream)
  const dispatch =useDispatch()
  return (
    <div>
      <h2>Number of IceCream = { NumberOfIcecream}</h2>
      {/* <h2>Buyer = { buyer}</h2> */}
      <button onClick={()=>dispatch(boughtIcecream())}>bough Icecrean</button>
      <input type="number" value={number} onChange={(e) => {
        setVallue(parseInt(e.target.value))
      }} />
      <button onClick={() => dispatch(SoldIceCream(number))}>sold Icecrean</button>
        <input type="text" onChange={hadlechange} />
    </div>
  );
};

export default IceCreanView;
