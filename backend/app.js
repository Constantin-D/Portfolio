const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

// Route pour servir le fichier JSON
app.get("/api/projects", (req, res) => {
    res.sendFile(path.join(__dirname, "data", "projects.json"));
});

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
