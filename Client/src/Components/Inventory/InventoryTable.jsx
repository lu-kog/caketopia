import React from "react";
import "./InventoryTable.css";
import InventoryRow from "./InventoryRow";

function InventoryTable({ items }) {
  return (
    <div className="inventory-table-box">
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>ID</th>
            <th className="text-right">Stock</th>
            <th>Unit</th>
            <th className="text-right">Price / Unit</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => <InventoryRow key={item.id} item={item}/>)}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;