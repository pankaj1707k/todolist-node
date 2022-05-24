const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks");
const PORT = 8000;

// middleware
app.use(express.json());

// routes
app.use("/api/tasks", taskRoutes);

app.listen(PORT, console.log(`Server listening on port ${PORT}...`));
