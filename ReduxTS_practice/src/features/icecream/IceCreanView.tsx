import { SoldIceCream, boughtIcecream } from "./iceCreamSlice";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const IceCreanView = () => {
  const [number, setVallue] = React.useState<number>(1);

  const NumberOfIcecream = useAppSelector(
    (state) => state.iceCreame.NumberOfIcecream
  );
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Number of IceCream = {NumberOfIcecream}</h2>
      {/* <h2>Buyer = { buyer}</h2> */}
      <button onClick={() => dispatch(boughtIcecream())}>bough Icecrean</button>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setVallue(parseInt(e.target.value));
        }}
      />
      <button onClick={() => dispatch(SoldIceCream(number))}>
        sold Icecrean
      </button>
    </div>
  );
};

export default IceCreanView;
