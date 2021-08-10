import * as React from "react";
import "./style.css";

import { Input } from "../../Atom/Input";
import { Button } from "../../Atom/Button";

export const HeaderContainer = ({ className, onSearch, ...props }) => {
  const toggleCart = () => {
    const sidebar = document.querySelector(".side__bar");
    sidebar.classList.toggle("show-sidebar");
  };
  return (
    <div className="header__container">
      <div className="logo">
        <h2>LOGO</h2>
      </div>
      <Input
        className="search-input"
        type="text"
        onChange={onSearch}
        placeholder="Pesquisa..."
      ></Input>
      <div className="header-buttons">
        <Button className="favorites" />
        <div className="cart__wrapper">
          <span children={props.children}></span>
          <Button className="cart" onClick={toggleCart}></Button>
        </div>
      </div>
    </div>
  );
};
