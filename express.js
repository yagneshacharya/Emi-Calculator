const express = require("express");
const app = express();
app.set("view engine", "ejs");


app.get('/',(req,res)=>{
    res.render('index.ejs')
})





app.listen(5000, () => {
    console.log(`port has been started`);
  });
  



