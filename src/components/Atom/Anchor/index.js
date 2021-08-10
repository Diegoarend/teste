import * as React from "react";
import "./style.css";

export const Anchor = ({ className, ...props }) => (
  <a className={className} href="http://localhost:3000/">
    {props.text}
  </a>
);
