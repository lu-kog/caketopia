import React from "react";
import "./InventoryActionsMenu.css";

function InventoryActionsMenu({ onClose }) {
  return (
    <>
      <button className="dropdown-action" onClick={onClose}>
        <span className="material-symbols-outlined" style={{fontSize:19,marginRight:9}}>add</span>Add more
      </button>
      <button className="dropdown-action" onClick={onClose}>
        <span className="material-symbols-outlined" style={{fontSize:19,marginRight:9}}>edit</span>Adjust Qty
      </button>
      <button className="dropdown-action delete" onClick={onClose}>
        <span className="material-symbols-outlined" style={{fontSize:19,marginRight:9}}>delete</span>Delete
      </button>
    </>
  );
}

export default InventoryActionsMenu;