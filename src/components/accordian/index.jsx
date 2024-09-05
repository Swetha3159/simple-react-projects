import React, { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordian = () => {
  const [selected, setSelectedValue] = useState(null);
  const [enableMultiSelection, setEnabledMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSingleSelection = (getCurrentId) => {
    // setSelectedValue(getCurrentId);
    selected === getCurrentId
      ? setSelectedValue(null)
      : setSelectedValue(getCurrentId);
  };
  const handleEnableMultiSelection = (getCurrentId) => {
    let cpyMultiple = [...multiple];

    const findSelectedIndex = cpyMultiple.indexOf(getCurrentId);
    console.log(findSelectedIndex);
    if (findSelectedIndex === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findSelectedIndex, 1);
    }
    setMultiple(cpyMultiple);
    console.log(cpyMultiple);
  };

  console.log(multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnabledMultiSelection(!enableMultiSelection)}>
        Enable multiple Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((eachItem) => {
            return (
              <div key={eachItem.id} className="item">
                <div
                  className="title"
                  onClick={() =>
                    enableMultiSelection
                      ? handleEnableMultiSelection(eachItem.id)
                      : handleSingleSelection(eachItem.id)
                  }
                >
                  <h3>{eachItem.question}</h3>
                  <span>+</span>
                </div>
                <div className="answer">
                  {enableMultiSelection
                    ? multiple.indexOf(eachItem.id) !== -1 && (
                        <div> {eachItem.answer} </div>
                      )
                    : selected === eachItem.id && <div>{eachItem.answer} </div>}
                  {/* {selected === eachItem.id ? (
                    <div>{eachItem.answer} </div>
                  ) : null} */}
                </div>
              </div>
            );
          })
        ) : (
          <div> No data available</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
