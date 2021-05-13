const express = require("express");
const app = express();
const port = 3000;
app.set("views", __dirname + "/views");
app.set("view engin", "ejs");

app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/search", (req, res) => {
  res.render("search.html");
});

app.listen(port, () => {
  console.log("server start", port);
});
