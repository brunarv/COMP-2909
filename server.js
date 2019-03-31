var express = require("express");
var expressValidator = require('express-validator');
var path = require("path");
var bodyParser = require("body-parser");
var flash = require('connect-flash')
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var index = require("./routes/index");
var eventAPI = require("./routes/api");
var forms = require("./routes/forms");

var app = express();

// view engine
var viewEngine = require("ejs-locals");
app.engine("ejs", viewEngine);
app.set("view engine", "ejs");

// set folder for static content
app.use(express.static(path.join(__dirname, "/dist/")));

// express session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// passport initialization
app.use(passport.initialize());
app.use(passport.session());

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.');
        var root = namespace.shift();
        var formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        }
    }
}));

app.use(flash());

// global vars
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

app.use("/", index);
app.use("/api", eventAPI);
app.use("/forms", forms);

app.set('port', (process.env.PORT) || 3000);

app.listen(app.get('port'), () => {
    console.log("Server started on port number " + app.get('port'));
});