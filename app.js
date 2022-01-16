const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use (express.static("public"));

////////////////////////////////////////////////////////////////////////////////

app.get("/", function(req , res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/secondPage", function(req,res) {
  res.sendFile(__dirname + "/second.html");
});










app.listen(process.env.PORT, function(){
  console.log("Server is running on port 3000");
});




////////////////////////////////////////////////////////////////////////////////
