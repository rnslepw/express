const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/contact.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "pages/404.html"));
});

const PORT: number = 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
