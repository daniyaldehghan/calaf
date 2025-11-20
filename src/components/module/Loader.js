import React from "react";
import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <ThreeDots
      color="#304ffe"
      height={45}
      ariaLabel="three-dots-loading"
      visible={true}
      wrapperStyle={{
        width: "100px",
        margin: "auto",
        alignItems: "center",
        textAlign: "center",
        padding: "10px ",
      }}
    />
  );
}

export default Loader;
