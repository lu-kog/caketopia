import React, { useState } from "react";
import "./InventoryRow.css";
import InventoryActionsMenu from "./InventoryActionsMenu";

// Icon mapping for row avatars
const iconMap = {
  Flour: "grain",
  Eggs: "egg",
  Sugar: "ac_unit",
  Vanilla: "water_drop",
  Buttercream: "icecream",
  Chocolate: "cookie",
  Milk: "water"
};

function InventoryRow({ item }) {
  const [showMenu, setShowMenu] = useState(false);
  let icon = "inventory_2";
  for (let key in iconMap) {
    if (item.name.toLowerCase().includes(key.toLowerCase())) icon = iconMap[key];
  }

  return (
    <tr>
      <td>
        <div className="row-flex">
          <span className="row-icon">
            <span className="material-symbols-outlined" style={{ fontSize:22, color:'var(--color-primary)' }}>{icon}</span>
          </span>
          {item.name}
        </div>
      </td>
      <td>{`INV${String(item.id).padStart(3,"0")}`}</td>
      <td className="text-right">{item.stock}</td>
      <td>{item.unit}</td>
      <td className="text-right">₹ {item.price_per_unit}</td>
      <td className="text-right">
        <div className={`inventory-dropdown${showMenu ? " open" : ""}`}>
          <button className="inventory-dropdown-btn" onClick={() => setShowMenu(!showMenu)}>
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
          <div className="inventory-dropdown-menu">
            <InventoryActionsMenu onClose={() => setShowMenu(false)} />
          </div>
        </div>
      </td>
    </tr>
  );
}

export default InventoryRow;