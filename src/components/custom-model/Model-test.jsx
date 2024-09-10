import React from "react";

const ModelTest = ({ id, header, body, footer, closeModel }) => {
  return (
    <div id={id || "Modal"} className="model">
      <div className="content">
        <div className="header">
          <span className="close-model-icon" onClick={closeModel}>
            &times;
          </span>
          <h1> {header ? header : "Header"}</h1>
        </div>
        <div className="body">
          <div>
            <p>{body ? body : "my modal content"}</p>
          </div>
        </div>
        <div className="footer">
          <h1>{footer ? footer : "footer"}</h1>
        </div>
      </div>
    </div>
  );
};

export default ModelTest;
