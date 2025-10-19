// webserver.js
const express = require("express");
const app = express();

// Root endpoint for UptimeRobot ping
app.get("/", (req, res) => {
  res.send("Minecraft AFK Bot is alive!");
});

// Optional health endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});

// Start your existing bot
require("./index.js");  // ensure this points to your actual main bot file
