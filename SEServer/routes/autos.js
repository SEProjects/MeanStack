/**
 * Created by kevin on 07.06.15.
 */
var express = require('express');
var router = express.Router();
var auto = require('../controllers/AutoController.js');
/* GET users listing. */
router.get('/:sessionId',auto.get);
router.get('/:sessionId/:AutoId',auto.getAuto);
router.put('/:sessionId/:AutoId',auto.saveAuto);
router.post('/:sessionId/new',auto.createAuto);


module.exports = router;
