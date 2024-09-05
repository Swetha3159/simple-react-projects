import React from "react";
import MenuItem from "./menu-item";

const MenuList = ({ list = [] }) => {
  //   console.log(list);
  return (
    <ul className="menu-list-container">
      {list && list.length > 0
        ? list.map((listItem) => {
            return <MenuItem item={listItem} />;
          })
        : null}
    </ul>
  );
};

export default MenuList;
