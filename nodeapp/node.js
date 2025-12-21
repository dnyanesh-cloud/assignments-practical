const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("✅ Node.js App is running successfully!");
});

// Health check route
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Node app hosted successfully",
    time: new Date()
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
