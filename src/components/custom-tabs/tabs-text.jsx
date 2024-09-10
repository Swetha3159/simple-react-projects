import React from "react";
import Tabs from "./tabs";
import "./tabs.css";
const RandomContent = () => {
  return <div>Some Random Content</div>;
};

const TabsText = () => {
  const tabsData = [
    {
      label: "tab1",
      content: <div> This is tab 1</div>,
    },
    {
      label: "tab2",
      content: <div> This is tab 2</div>,
    },

    {
      label: "tab3",
      content: <RandomContent />,
    },
  ];
  const handleChange = (getCurrentIndex) => {
    console.log(getCurrentIndex);
  };
  return (
    <Tabs
      tabs={tabsData}
      onChange={() => {
        handleChange();
      }}
    />
  );
};

export default TabsText;
