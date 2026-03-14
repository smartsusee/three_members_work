import React, { useContext, useEffect, useState } from "react";
import { dataPassing } from "./mainFileAddtoCart";

const MyOrder = () => {
  let updateData = [];
  const [count, setCount] = useState(0);
  const [pricedata, setpricedata] = useState(0);
  const getData = useContext(dataPassing);
  let { setCartData, cartData, state } = getData;

  const decInc = (id, type) => {
    if (type === "inc") {
      updateData = cartData.map((item, index) => {
        return item.id === id ? { ...item, count: item.count + 1 } : item;
      });
      setCartData(updateData);
    } else if (type === "dec") {
      updateData = cartData.map((item, index) => {
        return item.id === id
          ? { ...item, count: Math.max(1, item.count - 1) }
          : item;
      });
      setCartData(updateData);
    }
  };

  useEffect(() => {
    let countData = cartData.reduce((acc, curr) => {
      return (acc += curr.count);
    }, 0);
    let TotalPrice = cartData.reduce((acc, curr) => {
      return (acc += curr.count * curr.price);
    }, 0);
    setCount(countData);
    setpricedata(TotalPrice);
  }, [cartData]);

  const delFun = (itemId) => {
    console.log(itemId);
    let remainingData = cartData.filter((item) => item.id !== itemId);

    setCartData(remainingData);
  };
  return (
    <div>
      <h1>Cart {count}</h1>
      {cartData.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.name}</div>
            <div>₹{item.price}</div>
            <button
              onClick={() => {
                delFun(item.id);
              }}
            >
              del
            </button>
            <button
              onClick={() => {
                decInc(item.id, "inc");
              }}
            >
              +{" "}
            </button>
            <button>{item.count} </button>
            <button
              onClick={() => {
                decInc(item.id, "dec");
              }}
            >
              -{" "}
            </button>
          </div>
        );
      })}
      <div>Total: {pricedata}</div>
    </div>
  );
};

export default MyOrder;
