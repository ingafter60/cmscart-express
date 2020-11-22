// Import modules
var express = require('express')
var path = require('path')

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
