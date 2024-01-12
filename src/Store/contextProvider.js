import { useState } from "react";

import  CartContext  from "./cartContext";
const ContextProvider=(props)=>{
    const [CartItems, setCartItems] = useState([]);
    const [StoreItems, setStoreItems] = useState([]);
    const [TotalPrice, setAmount] = useState(0);
const addItemToCart=(item)=>{
    console.log(item)
    setCartItems([...StoreItems,item])   

}
const removeItemFromCart=()=>{}
const addItemToStore=(item)=>{
    console.log(StoreItems)
    setStoreItems([...StoreItems,item])   
}

    const finalContext={
        CartItems:[],
        TotalPrice:0,
        AddItems:addItemToCart,
        RemoveItems:removeItemFromCart,
        StoreItems:StoreItems,
        AddItemsToStore:addItemToStore,
    }
    return(<CartContext.Provider value={finalContext}>
          {props.children}

    
</CartContext.Provider>);
}
export default ContextProvider