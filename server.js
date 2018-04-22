const express = require("express");
const {createServer}=require('http');
const compression=require('compression');
const morgan = require('morgan');
const path=require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//onst routes = require("./routes");
const app = express();
const dev = app.get('env') !== 'production'
if(!dev){
  app.disable('x-powered-by')
  app.use(compression())
  app.use(morgan('common'))

  app.use(express.static(path.resolve(__dirname,'build')))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'))
  })
}
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
//app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/signuplist");
const connection = mongoose.connection;
connection.once("open",function(){
    console.log("Mongoose DB Connected");
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
