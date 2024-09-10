import React, { useState } from "react";

const Tabs = ({ tabs, onChange }) => {
  // console.log(tabs);
  const [currentIndex, setCurrentIndex] = useState(0);
  //   console.log(currentIndex);
  const handleClick = (getCurrentIndex) => {
    setCurrentIndex(getCurrentIndex);
    onChange(currentIndex);
  };
  return (
    <div className="wrapper">
      <div className="heading">
        {tabs && tabs.length > 0
          ? tabs.map((tabItem, index) => {
              return (
                <div
                  className={`tab-item ${
                    currentIndex === index ? "active" : ""
                  }`}
                  key={tabItem.label}
                  onClick={() => handleClick(index)}
                >
                  <span className="label">{tabItem.label} </span>
                </div>
              );
            })
          : "null"}
      </div>
      <div className="content">
        {tabs[currentIndex] && tabs[currentIndex].content}
        {/* {tabs && tabs.length > 0
          ? tabs.map((tabItem, index) => {
              return currentIndex === index ? (
                <div onClick={() => handleClick(index)}>{tabItem.content}</div>
              ) : (
                ""
              );
            })
          : "null"} */}
      </div>
    </div>
  );
};

export default Tabs;
