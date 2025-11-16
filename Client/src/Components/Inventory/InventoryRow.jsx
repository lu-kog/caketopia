import React from "react";

export default function InventoryRow({ item }) {
  const low = item.stock < item.low_stock_threshold;

  return (
    <tr className="inv-row">
      <td>
        <div className="inv-item">
          <div className="inv-icon-box">{item.icon_emoji || "📦"}</div>
          {item.name}
        </div>
      </td>

      <td className="muted">{item.id}</td>

      <td className={low ? "low-stock right" : "right"}>
        {low && (
          <span className="material-symbols-outlined warning-icon">
            warning
          </span>
        )}
        {item.stock}
      </td>

      <td className="muted">{item.unit}</td>

      <td className="right muted">₹{item.price_per_unit}</td>

      <td className="center">
        <button className="inv-action-btn">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </td>
    </tr>
  );
}
