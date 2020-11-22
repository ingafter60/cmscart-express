// Import modules
var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var config = require('./config/database')

// Connect to db
// mongoose.connect('mongodb://localhost/cmscart-express')
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

// Route
app.get('/', function (req, res) {
  res.send('Hello world!')
})

// Start the server
var PORT = 3000
app.listen(PORT, function () {
  console.log('Server is running on port ' + PORT)
})
