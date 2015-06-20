/**
 * Created by kevin on 07.06.15.
 */
var express = require('express');
var router = express.Router();
var aa = require('../controllers/AutoArtenController.js');
/* GET users listing. */
router.get('/:sessionId',aa.get);
router.get('/:sessionId/:AAId',aa.getAA);
router.put('/:sessionId/:AAId',aa.saveAA);
router.post('/:sessionId/new',aa.newAA);
router.post('/pic/:sessionId/:AAid',aa.createPic);
router.get('/pic/:sessionId/:AAid',aa.getPic);

module.exports = router;
