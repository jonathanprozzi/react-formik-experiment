import React from "react";

const VisualDataDebug = ({ data, space }) => {
  return (
    <div>
      <pre>{JSON.stringify(data, null, space)}</pre>
    </div>
  );
};

export default VisualDataDebug;
