import React from "react";
import InventoryRow from "./InventoryRow";
import NewItemRow from "./NewItemRow";

export default function InventoryTable({ items, adding, cancelAdd, saveNew }) {
  return (
    <table className="inv-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>ID</th>
          <th className="right">Stock</th>
          <th>Unit</th>
          <th className="right">Price</th>
          {/* <th className="center">Low Threshold</th> */}
          <th className="center">Actions</th>
        </tr>
      </thead>

      <tbody>
        {adding && (
          <NewItemRow cancelAdd={cancelAdd} saveNew={saveNew} />
        )}

        {items.map((item) => (
          <InventoryRow key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}
