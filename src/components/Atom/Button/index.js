import * as React from "react"; 
import './style.css'


export const Button= ({className,children, onClick}) => {
 return <button className={className} onClick={onClick}>{children}</button>
}
