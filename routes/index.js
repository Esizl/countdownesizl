const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', { query: req.query })
})

module.exports = router