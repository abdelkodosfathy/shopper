import React, { createContext, useState} from "react";
import all_product  from '../assets/all_product';

export const ShopContext = createContext(null);
function getDefaultCart(){
  let cart = {}
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index] = 0;
    
  }
  return cart
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  
  const addToCart = (itemId) => {
    setCartItems(prev => ({...prev, [itemId]:prev[itemId]+1}));
  }

  const getTotlaCartAmount = () => {
    let totlaAmount = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = all_product.find((product)=>product.id === Number(item));
        totlaAmount += itemInfo.new_price * cartItems[item];
      }
      return totlaAmount;
    }
  }

  const getTotalCartItems = () =>{
    let totalItem = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }
  const removeFromCart = (itemId) => {
    setCartItems(prev => ({...prev, [itemId]:prev[itemId]-1}));
  }

  const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotlaCartAmount, getTotalCartItems};
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
export default ShopContextProvider;