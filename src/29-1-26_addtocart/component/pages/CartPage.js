import React, { useContext } from "react";
import { dataPassing } from "./mainFileAddtoCart";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const data = useContext(dataPassing);
  //   console.log(data);

  let { setCartData, cartData, state } = data;

  const navigate = useNavigate();
  const handleAdded = (item) => {
    console.log(item);

    if (cartData.some((details) => details.id === item.id)) {
      alert("item already added");
      return;
    }

    setCartData([...cartData, { ...item, count: 1 }]);
  };

  return (
    <div>
      <button
        onClick={() => {
          navigate("/order");
        }}
      >
        orderPage
      </button>
      {state.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.name}</div>
            <div>₹{item.price}</div>
            <button
              onClick={() => {
                handleAdded(item);
              }}
            >
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartPage;
