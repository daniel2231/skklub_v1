const express = require("express");
const app = express();
const port = 80;
// never change the fucking port pls 

app.use(express.static(__dirname + "/public"));

var router = require("./router");
app.use(router);

app.listen(port, () => {
  console.log(`server is listening in port: ${port}`);
});
