import * as React from "react";
import "./style.css";

export const Image = ({ className, src, alt }) => (
  <img className={className} src={src} alt={alt} />
);
