const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = 8000;

// middleware
app.use(express.json());

// routes
app.use("/api/tasks", taskRoutes);

mongoose.connect(process.env.MONGO_URI).catch((err) => {
  console.log(err);
});

app.listen(PORT, console.log(`Server listening on port ${PORT}...`));
