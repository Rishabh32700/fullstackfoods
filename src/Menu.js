import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="section-center">
        <p className="empty-state">No items found.</p>
      </div>
    );
  }

  return (
    <div className="section-center">
      {items.map((menuItem) => (
        <MenuItem key={menuItem.id} item={menuItem} />
      ))}
    </div>
  );
};

export default Menu;
