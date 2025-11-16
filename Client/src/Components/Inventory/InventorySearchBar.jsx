import React from "react";
import "./InventorySearchBar.css";

function InventorySearchBar({ value, onChange }) {
  return (
    <div className="inventory-search-row">
      <div className="inventory-search">
        <span className="material-symbols-outlined search-icon">search</span>
        <input
          className="inventory-search-input"
          type="text"
          placeholder="Search items..."
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default InventorySearchBar;