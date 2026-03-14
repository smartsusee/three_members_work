import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./CartPage";
import MyOrder from "./MyOrder";

export const dataPassing = createContext(null);
const MainFileAddtoCart = () => {
  // Operator

    // let a = 10 

    // a -= 90 

  // arithmetic + , - , / , % , , compare < , > , <= ,>= , == , === , != , !== , logical && , ||  ! , assignment , += , -= , ++ , -- 

  let tc = true;
  let auth = true;


  //  let college = tc || auth

  //  console.log(!college);
   
  // let c = a != b;

  console.log(c);

  const [state, setState] = useState([
    { name: "nokia", price: 100, id: 1 },
    { name: "samsung", price: 120, id: 2 },
  ]);

  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || [],
  );

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  return (
    <div>
      <dataPassing.Provider value={{ state, cartData, setCartData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CartPage />} />
            <Route path="/order" element={<MyOrder />} />
          </Routes>
        </BrowserRouter>
      </dataPassing.Provider>
    </div>
  );
};

export default MainFileAddtoCart;
