const express = require("express");
const app = express();

const PORT = 3000;

// Route
app.get("/", (req, res) => {
  res.send("✅ Matrix is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running: http://localhost:${PORT}`);
});
