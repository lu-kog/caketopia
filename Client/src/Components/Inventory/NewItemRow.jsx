import React, { useState } from "react";
import { addItem } from "../../services/inventoryApi";

export default function NewItemRow({ cancelAdd, saveNew }) {
  const [emoji, setEmoji] = useState("📦");
  const [name, setName] = useState("");
  const [stock, setStock] = useState(0);
  const [unit, setUnit] = useState("Kg");
  const [price, setPrice] = useState(0);
  const [low, setLow] = useState(0);

  async function save() {
    const newItem = {
      icon_emoji: emoji,
      name,
      stock: parseFloat(stock),
      unit,
      price_per_unit: parseFloat(price),
      low_stock_threshold: parseFloat(low)
    };

    const saved = await addItem(newItem);
    saveNew(saved);
  }

  return (
    <tr className="inv-row edit-row">

      {/* Emoji Picker */}
      <td>
        <div className="inv-item">
          <button
            className="emoji-btn"
            onClick={() => {
              const symbol = prompt("Enter Emoji:");
              if (symbol) setEmoji(symbol);
            }}
          >
            {emoji}
          </button>

          <input
            type="text"
            placeholder="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="inv-input"
          />
        </div>
      </td>

      <td className="muted">—</td>

      <td>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="inv-input right"
        />
      </td>

      <td>
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="inv-input"
        >
          <option>Kg</option>
          <option>Grams</option>
          <option>Pcs</option>
          <option>Ltr</option>
          <option>Ml</option>
        </select>
      </td>

      <td>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="inv-input right"
        />
      </td>

      <td>
        <input
          type="number"
          value={low}
          onChange={(e) => setLow(e.target.value)}
          className="inv-input center"
        />
      </td>

      {/* Actions */}
      <td className="center">
        <button className="inv-save-btn" onClick={save}>Save</button>
        <button className="inv-cancel-btn" onClick={cancelAdd}>Cancel</button>
      </td>
    </tr>
  );
}
