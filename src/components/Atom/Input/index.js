import * as React from "react"; 
import './style.css'


export const Input = ({className,onChange,...props}) => {
  
  return(
  <input type={props.type} onChange={onChange} placeholder={props.placeholder} value={props.text} className={className} />
)};
