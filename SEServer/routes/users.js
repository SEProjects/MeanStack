var express = require('express');
var router = express.Router();
var user = require('../controllers/UserController.js');
/* GET users listing. */
router.get('/hash/:hash',user.emailbestaetigen);
router.get('/:sessionId',user.get);
router.get('/:sessionId/:userId',user.getUser);
router.put('/:sessionId/:userId',user.saveUser);


module.exports = router;
