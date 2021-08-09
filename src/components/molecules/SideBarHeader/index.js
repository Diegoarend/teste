import * as React from "react"; 
import './style.css'

import {Paragraph} from "../../Atom/Paragraph"
import {Anchor} from "../../Atom/Anchor"



export const SideBarHeader = ({className}) => (
  <div className={className}>
    <Paragraph className="side__bar__title">Meu carrinho</Paragraph>
    <Anchor href="http://localhost:3000/" target="_blank">Esvaziar</Anchor>
  </div>
)

