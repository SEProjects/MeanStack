/**
 * Created by kevin on 07.06.15.
 */
var express = require('express');
var router = express.Router();
var marken = require('../controllers/MarkeController.js');
/* GET users listing. */
router.get('/:sessionId',marken.get);
router.get('/:sessionId/:MarkeId',marken.getMarke);
router.put('/:sessionId/:MarkeId',marken.saveMarke);
router.post('/:sessionId/new',marken.newMarke);


module.exports = router;
