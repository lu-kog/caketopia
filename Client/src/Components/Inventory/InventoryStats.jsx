import React from "react";
import "./InventoryStats.css";

function InventoryStats({ items }) {
  const numItems = items.length;
  const totalWorth = items.reduce(
    (acc, item) => acc + (parseFloat(item.stock) * parseFloat(item.price_per_unit)), 0
  );

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <span className="stat-title">Number of items</span>
        <span className="stat-value">{numItems}</span>
      </div>
      <div className="stat-card">
        <span className="stat-title">Total worth of inventory</span>
        <span className="stat-value">₹ {totalWorth.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default InventoryStats;