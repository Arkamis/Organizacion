var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.post('/addNotice', (req, res) => {
    
});
module.exports = router;