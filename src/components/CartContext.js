import {createContext, useContext, useEffect, useState} from 'react';

export const CartContext= createContext();

export const CartProvider= ({children}) => {
  const [cart,setCart]=useState({})
  useEffect(() => {
    const cartLocal= window.localStorage.getItem('cart')
    if(cartLocal){
      setCart(JSON.parse(cartLocal))
    }
  },[])
  const addToCart= movie => {
    setCart((old) => {
      let quantity=0
      if(old[movie.id]){
        quantity=old[movie.id].quantity
      }
      const newCart= {...old,
      [movie.id]:{
        quantity:quantity+1,     
        movie
      }
    }
    window.localStorage.setItem('cart',JSON.stringify(newCart))
    return newCart
    })
  }

  const removeFromCart= (movieId) => {
    setCart(old => {
      const newCart={}
     
      Object.keys(old).forEach(id => {
        if((id !== (movieId).toString())) {
          console.log(typeof(id))
          console.log(typeof(movieId))
          newCart[id]=old[id]
          console.log("ok")
          
        }  if(old[id].quantity >= 2){
          newCart[id]=old[id]
          newCart[id].quantity-=1
          console.log(old[id].quantity)
          console.log(newCart[id].quantity)
          console.log("mais de 1")
        }
      })
      console.log(newCart)
      window.localStorage.setItem('cart',JSON.stringify(newCart))
      return newCart
    })
  }

  const EmptyCart= () => {
    setCart(() => {
      const newCart={}
      window.localStorage.setItem('cart',JSON.stringify(newCart))
      return newCart
    })
  }
  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart,EmptyCart}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart= () => {
  const cart = useContext(CartContext)
  return cart
}