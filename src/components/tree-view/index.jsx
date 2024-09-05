import React from "react";
import MenuList from "./menu-list";
import "./style.css";

const Treeview = ({ menus = [] }) => {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
};

export default Treeview;
