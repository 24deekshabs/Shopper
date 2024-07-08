import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';
import { Product } from "../Pages/Product";

export const ShopContext=createContext(null);
const getDefaultCart = ()=>{
    let cart = {};//created empty object
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
//function ShopContextProvider is created where props is passed

    const [cartItems,setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((Product) => Product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0)
                {
                    totalItem+=cartItems[item]
                }
        }
        return totalItem;
    }
        //console.log(cartItems);
    const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};//we can access this product in any component

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;

//Here we  are creating a context using React's createContext function.
/* Importing createContext:

createContext is a function provided by React that is used to create a new Context object.
Creating the Context:

const ShopContext = createContext(null);
This line creates a new Context object called ShopContext.
The argument passed to createContext (null in this case) is the default value for the context. This value is used when a component does not have a matching Provider above it in the tree.
Exporting the Context:

export const ShopContext = createContext(null);
By exporting ShopContext, it can be imported and used in other parts of your application to provide and consume the context value.*/