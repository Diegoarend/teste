import * as React from "react"; 
import './style.css';


import {SideBarHeader} from "../../molecules/SideBarHeader";
import {SideBarContent} from "../../molecules/SideBarContent";
import {SideBarTotal} from "../../molecules/SideBarTotal";



export const SideBar= ({className}) => (
  <section className={className}>
    <SideBarHeader/>
    <SideBarContent />
    <SideBarTotal/>      
    <a class="side__bar__finish" href="http://localhost:3000/" target="_blank">Finalizar compra</a>
  </section>
)
