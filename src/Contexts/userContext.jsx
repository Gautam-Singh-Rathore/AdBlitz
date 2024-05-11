import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { fireDB } from "../Firebase/config";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("users")) || {};
  const [isLoggedIn, setIsLoggedIn] = useState(Object.keys(user).length > 0);
  const [location , setLocation] = useState('Jaipur');

  // get all product state
  const [allProduct , setAllProduct] = useState([]);

  const getAllProduct = async()=>{
    try {
        const q = query(
            collection(fireDB , 'products'),
            orderBy('time')
        );

        const data = onSnapshot(q , (QuerySnapshot)=>{
            let productArray = [];
            QuerySnapshot.forEach((doc)=>{
                productArray.push({...doc.data(),id:doc.id});
            });
            setAllProduct(productArray);
        })
        return data;  
    } catch (error) {
        console.log(error);
    }
  }
  // get all cart products
  const [cart , setCart ] = useState([]);
  const getCartProduct = async()=>{
    try {
        const q = query(
            collection(fireDB , 'cart'),
            orderBy('time')
        );

        const data = onSnapshot(q , (QuerySnapshot)=>{
            let productArray = [];
            QuerySnapshot.forEach((doc)=>{
                productArray.push({...doc.data(),id:doc.id});
            });
            setCart(productArray);
        })
        return data;  
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    getAllProduct();
    getCartProduct();
    console.log(allProduct);
  },[]);

  



  return (
    <UserContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, getCartProduct,  allProduct , getAllProduct , location , setLocation , cart  }}
    >
      {children};
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
