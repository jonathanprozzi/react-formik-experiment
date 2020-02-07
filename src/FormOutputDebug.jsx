import React from "react";

const FormOutputDebug = ({ formValues, space }) => {
  return (
    <div>
      <pre>{JSON.stringify(formValues, null, space)}</pre>
    </div>
  );
};

export default FormOutputDebug;
