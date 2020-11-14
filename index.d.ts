import React from "react";

export interface LoaderProps {
  loaderColor?: string;
  className?: string;
  spinnerItemClassName?: string;
  fullWidth?: boolean;
}

export class Loader extends React.Component<LoaderProps, any> {}

export default Loader;
