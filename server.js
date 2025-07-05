/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
require("dotenv").config();

const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();

// Import routes
const staticRoutes = require("./routes/static");
const inventoryRoutes = require("./routes/inventoryRoute");

// View engine setup
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");

// Serve static files
app.use(express.static("public"));

// Routes
app.use("/", staticRoutes);
app.use("/inv", inventoryRoutes);

// Root route
app.get("/", (req, res) => {
  res.render("index");
});

// Server configuration
const PORT = process.env.PORT || 5500;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, () => {
  console.log(`✅ Server running at http://${HOST}:${PORT}`);
});
