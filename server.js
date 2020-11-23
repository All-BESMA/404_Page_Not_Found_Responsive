const express = require("express");

const app = express();

const path = require("path");

const port = process.env.PORT || 5001;

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, "public"))); //  "public" off of current is root

//At the end of routes. Capture All 404 errors
app.use(function (req, res, next) {
  res.status(404).redirect("/error404.html");
  // res.status(404).send("Unable to find the requested resource!");
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
