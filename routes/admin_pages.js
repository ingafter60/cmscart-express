var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.send('Admin area')
})

router.get('/test', function (req, res) {
  res.send('admin/pages/test')
})

// Export
module.exports = router
