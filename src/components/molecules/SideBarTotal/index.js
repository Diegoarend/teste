import * as React from "react"; 
import './style.css'

import {Paragraph} from "../../Atom/Paragraph"





export const SideBarTotal = ({className}) => (
  <div className="sider__bar__total">
    <Paragraph className="">Nome do Filme</Paragraph>
    <Paragraph className="">1</Paragraph>
    <Paragraph className="">R$ 79.99</Paragraph>   
  </div>
)
