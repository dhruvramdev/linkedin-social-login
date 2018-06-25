const 	express = require("express"),
		bodyParser = require("body-parser"),
		mongoose = require('mongoose'),
		session = require('express-session'),
		passport = require('passport'),
		path = require('path'),
		cookieParser = require('cookie-parser'),
		cors = require('cors'),
		app = express()

const PORT = process.env.PORT || 3000;

const routes = require('./routes/index.js');
mongoose.connect('mongodb://localhost/passport-social-auth');

app.use(cors({origin: 'http:localhost:3001'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

app.listen(PORT, () => {
    console.log("server running...");
});

