import React from "react";
import LoaderPlane from "react-loader-spinner";

const loaderProps = {
  type: "Plane",
  color: "#00BFFF",
  height: "100",
  width: "100"
};

function Loader() {
  return <LoaderPlane {...loaderProps} />;
}

export default Loader;
