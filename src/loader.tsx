import React from "react";
import "./loader.css";
import { LoaderProps } from '../index.d';

const Loader = ({ loaderColor = "DodgerBlue", className = "", spinnerItemClassName = "", fullWidth }: LoaderProps): JSX.Element => {
  const inlineColor =
    loaderColor.length > 0 ? { borderTopColor: loaderColor } : {};
  const wrapperClass = fullWidth ? "" : "loader--normal";

  return (
    <div className={`loader ${wrapperClass} ${className}`}>
      <div>
        <div className={spinnerItemClassName} style={inlineColor} />
        <div className={spinnerItemClassName} style={inlineColor} />
        <div className={spinnerItemClassName} style={inlineColor} />
        <div className={spinnerItemClassName} style={inlineColor} />
      </div>
    </div>
  );
};

export default Loader;
