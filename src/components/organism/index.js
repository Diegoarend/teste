import * as React from "react"; 
import './style.css'


import {Button} from "../../Atom/Button"
import { Paragraph } from "../../Atom/Paragraph";

import poster from "../../../images/poster-2.jpg"
import star from "../../../images/star.svg"


export const Card___ = () => (
    <div class="cards__card">
      <div class="card__image">
        <img src={poster} />
        <Button className="card__add-to-favorite"/>
      </div>
      <div class="card__content">
        <Paragraph className="card__title ">Nome do Filme</Paragraph>
        <div class="card__info">
          <img className="card__rating-img" src={star} alt=""></img>
          <Paragraph className="card__grade ">7</Paragraph>
          <Paragraph className="card__gender">Gênero</Paragraph>
        </div>   
          <Paragraph className="card__price">R$ 79,99</Paragraph>              
      </div>
      <Button className="card__add-car">Adicionar</Button>
    </div>
  
)
