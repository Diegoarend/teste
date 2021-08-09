import * as React from "react"; 
import './style.css'

import {Input} from "../../Atom/Input"
import {Button} from "../../Atom/Button"



export const HeaderContainer = ({className,children}) => (
    <div class="header__container">
      <div class="logo">
          <h2>LOGO</h2>
      </div>
      <Input className="search-input" />
      <div class="header-buttons">
        <Button className="favorites" />
        <Button className="cart"/>
      </div>
    </div>
)

