import React from "react";
import "./style.css";
import {Button} from '../../Atom/Button'


export function CardImage(props) {
  return <div className="card__image">
            <img src={props.image} alt={props.alt}/>
            <Button onClick={props.onClick} className="card__add-to-favorite"/>
            <p className="card__release__date">{props.releaseDate}</p>
        </div>
}

export function CardContent(props) {
  return <div className="card__content">{props.children}</div>;
}

export function CardInfo(props) {
  return <div className="card__info">{props.children}</div>;
}

export function CardTitle(props) {
  return <p className="card__title ">{props.title}</p>;
}

export function CardText({className,...props}) {
  return <p className={className}>{props.text}</p>;
}


export function Card(props) {
  return <div className="cards__card">{props.children}</div>;
}
