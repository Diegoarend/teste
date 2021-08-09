import * as React from "react"; 
import './style.css'

export const Input = ({className,...props}) => (
  <input type={props.type} placeholder={props.placeholder} value={props.text} className={className} />
);
