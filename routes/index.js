var express = require('express');
var router = express.Router();
var  {UserQueries} = require('../controllers/user.controller');
/**
 
/* GET home page. */

router.route("/admin")
.get(async function(req, res, next) {
  const users  = await UserQueries.getAllusers();
  res.render('index',{
    Alluser : users.users,
  });
 
});


module.exports = router;
 