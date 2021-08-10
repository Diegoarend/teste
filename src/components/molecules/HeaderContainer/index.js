import * as React from "react"; 
import './style.css'

import {Input} from "../../Atom/Input"
import {Anchor} from "../../Atom/Anchor"



export const HeaderContainer = ({className,...props}) => (
    <div className="header__container">
      <div className="logo">
          <h2>LOGO</h2>
      </div>
      <Input className="search-input" />
      <div className="header-buttons">
        <Anchor className="favorites" />
        <Anchor className="cart" text={props.text} ></Anchor>
      </div>
    </div>
)

