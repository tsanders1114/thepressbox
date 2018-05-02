const express = require("express");
const cheerio = require('cheerio');
const { createServer } = require('http');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const Contact = require('./models/contact');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
})); 
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'JJ8p3rtIGyrctrK4thHlPLEoI8HSQuWnRgSphBRCXPPe3Ih0QL72Xsesyzugvy2G',
    resave: true,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


var Account = require('./models/accounts');

passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

const dev = app.get('env') !== 'production'
if (!dev) {
    app.disable('x-powered-by')
    app.use(compression())
    app.use(morgan('common'))

    app.use(express.static(path.resolve(__dirname, 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}

var databaseUri = "mongodb://localhost/signuplist";
if(process.env.MONGODB_URI){
    mongoose.connect(process.env.MONGODB_URI);
}else{
    mongoose.connect(databaseUri);
}



const PORT = process.env.PORT || 3001;
// Serve up static assets
//app.use(express.static("client/build"));

app.use('/', express.static("./build"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/signuplist");
const connection = mongoose.connection;
connection.once("open", function () {
    console.log("Mongoose DB Connected");
});

//const connection = mongoose.connection;
//connection.once("open", function () {
  //  console.log("Mongoose DB Connected");
//});

app.use('/', require('./routes/index'));

app.post('/contact', (req, res) => {
    const {
        name,
        emailAddress,
        message
    } = req.body;
    let contact = new Contact({
        name,
        emailAddress,
        message
    });
    contact.save((err) => {
        console.log(err);
        err ? res.status(500).send("ERROR") : res.send("SUCCESS")
    });
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});