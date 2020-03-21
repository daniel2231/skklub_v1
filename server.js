const express = require("express");
const app = express();
const port = 5000;

app.use(express.static(__dirname + "/public"));

var router = require("./router");
app.use(router);

app.listen(port, () => {
  console.log(`server is listening in port: ${port}`);
});
