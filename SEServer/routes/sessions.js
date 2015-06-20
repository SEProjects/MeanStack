/**
 * Created by kevin on 04.06.15.
 */
var express = require('express');
var router = express.Router();
var session = require('../controllers/SessionController');
/* GET users listing. */
router.post('/', session.post);
router.get('/:sessionId',session.show);
module.exports = router;
