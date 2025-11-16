const express = require("express");
const cors = require("cors");
const pool = require("./db");  // <---- Import your DB connection

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Import and use inventory routes:
const inventoryRoutes = require("./routes/inventory");
app.use("/api/inventory", inventoryRoutes);

// --- Test DB connection ---
app.get("/api/dbtest", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ time: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});