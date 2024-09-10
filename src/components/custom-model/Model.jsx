import React, { useState } from "react";
import ModelTest from "./Model-test";
import "./style.css";
const Model = () => {
  const [showModalPop, setModalPop] = useState(false);
  const handleModelPOp = () => {
    setModalPop(!showModalPop);
  };
  //   console.log(showModalPop);
  const handleCloseModel = () => {
    setModalPop(false);
  };
  return (
    <div>
      <button onClick={() => handleModelPOp()}>Open Modal Popup</button>
      {showModalPop && (
        <ModelTest
          header={<div>Customized Header</div>}
          closeModel={handleCloseModel}
        />
      )}
    </div>
  );
};

export default Model;
