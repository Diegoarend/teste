import * as React from "react"; 
import './style.css'

import {Paragraph} from "../../Atom/Paragraph"
import {Image} from "../../Atom/Image"
import {Button} from "../../Atom/Button"
import poster from "../../../images/poster-2.jpg"




export const SideBarContent = ({className}) => (
  <div className={className}>
    <Image className="poster_min" src={poster} alt="poster-img"></Image>
    <Paragraph className="">Nome do Filme</Paragraph>
    <Paragraph className="">1</Paragraph>
    <Paragraph className="">R$ 79.99</Paragraph>
    <Button className="trash_can" />
  </div>
)
