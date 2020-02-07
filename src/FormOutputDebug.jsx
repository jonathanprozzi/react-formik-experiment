import React from "react";

const FormOutputDebug = ({ formValues }) => {
  return (
    <div>
      <pre>{JSON.stringify(formValues, 2, null)}</pre>
    </div>
  );
};

export default FormOutputDebug;
