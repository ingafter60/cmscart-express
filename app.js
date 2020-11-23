// Import modules
var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var config = require('./config/database')
var bodyParser = require('body-parser')
var session = require('express-session')
var expressValidator = require('express-validator')

// Connect to db
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
  console.log('Connected to MongoDB')
})

// Init app
var app = express()

// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Setu public folder
app.use(express.static(path.join(__dirname, 'public')))

// Set global errors variable
app.locals.errors = null

// Body Parser middleware
//
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Express session middleware
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
)

// Express Validator middleware
app.use(
  expressValidator({
    errorFormatter: function (param, msg, value) {
      var namespace = param.split('.'),
        root = namespace.shift(),
        formParam = root

      while (namespace.length) {
        formParam += '[' + namespace.shift() + ']'
      }
      return {
        param: formParam,
        msg: msg,
        value: value,
      }
    },
  })
)

// Express Messages middleware
app.use(require('connect-flash')())
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res)
  next()
})

// Set route
var pages = require('./routes/pages.js')
var adminPages = require('./routes/admin_pages.js')

// Set the urls
app.use('/', pages)
app.use('/admin/pages', adminPages)

// Start the server
var PORT = 3000
app.listen(PORT, function () {
  console.log('Server is running on port ' + PORT)
})
