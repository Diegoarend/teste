import * as React from "react";
import "./style.css";

import { useCart } from "../../CartContext";

import { HeaderContainer } from "../../molecules/HeaderContainer";

export const Header = ({ onSearch, ...props }) => {
  const cart = useCart();
  const itemsCount = Object.keys(cart.cart).reduce((prev, curr) => {
    return prev + cart.cart[curr].quantity;
  }, 0);

  return (
    <header>
      <div className="blank-container"></div>
      <HeaderContainer
        onSearch={onSearch}
        children={
          itemsCount > 0 && (
            <span id="span__counter" className="header__counter">
              {itemsCount}
            </span>
          )
        }
      />
    </header>
  );
};
