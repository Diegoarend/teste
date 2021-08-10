import * as React from "react"; 
import './style.css'

import { useCart } from "../../CartContext";


import {HeaderContainer} from "../../molecules/HeaderContainer"



export const Header = (props) => { 
  const cart = useCart()
  const itemsCount= Object.keys(cart.cart).reduce((prev,curr) => {
    return prev + cart.cart[curr].quantity
  },0)
 
  return ( 
    <header>
      <div className="blank-container">{itemsCount}</div>
      <HeaderContainer text={itemsCount > 0 && <span>{itemsCount}</span>}/>
    </header>
  )
}