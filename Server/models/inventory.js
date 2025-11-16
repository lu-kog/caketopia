const pool = require("../db");

// Fetch all inventory items
async function getAllItems() {
  const { rows } = await pool.query(
    "SELECT * FROM inventory ORDER BY id"
  );
  return rows;
}

// Fetch single item by ID
async function getItemById(id) {
  const { rows } = await pool.query(
    "SELECT * FROM inventory WHERE id = $1",
    [id]
  );
  return rows[0];
}

// Add a new inventory item
async function addItem(data) {
  const {
    icon_emoji,
    name,
    stock,
    unit,
    price_per_unit,
    low_stock_threshold
  } = data;

  const { rows } = await pool.query(
    `INSERT INTO inventory 
      (icon_emoji, name, stock, unit, price_per_unit, low_stock_threshold)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *`,
    [icon_emoji, name, stock, unit, price_per_unit, low_stock_threshold]
  );

  return rows[0];
}


/*
  Dynamic Update Function
  Only updates fields provided in "data"
  Safer + prevents overwriting fields unintentionally
*/
async function updateItem(id, data) {
  const keys = Object.keys(data);

  if (keys.length === 0) {
    throw new Error("No fields provided for update");
  }

  const setParts = keys.map((key, index) => `${key} = $${index + 1}`);
  const values = Object.values(data);

  const query = `
    UPDATE inventory 
    SET ${setParts.join(", ")}
    WHERE id = $${keys.length + 1}
    RETURNING *
  `;

  const { rows } = await pool.query(query, [...values, id]);
  return rows[0];
}

// Delete an item
async function deleteItem(id) {
  const { rows } = await pool.query(
    "DELETE FROM inventory WHERE id=$1 RETURNING *",
    [id]
  );
  return rows[0];
}

module.exports = {
  getAllItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem
};
