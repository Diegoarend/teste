import * as React from "react";
import "./style.css";

export const Paragraph = ({ className, children }) => (
  <p className={className}>{children}</p>
);
