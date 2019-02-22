var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', (req,res) => {
  const User = {
    name: 'test',
    password: '123@password'
  };

  let user = req.body.userName;
  let password = req.body.password;

  if(User.name == user && User.password == password){
    //res.render('dashboard', {user});
    res.status(201).json({message: 'Success'});
  }
  res.status(403).json({message:'error en credenciales'});
});

module.exports = router;
