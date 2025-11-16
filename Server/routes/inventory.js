const express = require("express");
const router = express.Router();
const Inventory = require("../models/inventory");

// GET - fetch all inventory items
router.get("/", async (req, res) => {
  try {
    const items = await Inventory.getAllItems();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - fetch a single item by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await Inventory.getItemById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST - add a new inventory item
router.post("/", async (req, res) => {
  try {
    const newItem = await Inventory.addItem(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT - full or partial update of an inventory item
router.put("/:id", async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: "Request body is empty" });
    }

    const updatedItem = await Inventory.updateItem(req.params.id, req.body);

    if (!updatedItem) return res.status(404).json({ error: "Item not found" });

    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE - delete an inventory item
router.delete("/:id", async (req, res) => {
  try {
    const deletedItem = await Inventory.deleteItem(req.params.id);
    if (!deletedItem) return res.status(404).json({ error: "Item not found" });

    res.json({ message: "Item deleted successfully", deletedItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
