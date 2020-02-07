import React from "react";

const FormOutputDebug = ({ data, space }) => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, space)}</pre>
    </div>
  );
};

export default FormOutputDebug;
