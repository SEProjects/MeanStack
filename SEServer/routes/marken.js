/**
 * Created by kevin on 07.06.15.
 * Antwort Routen für Alle Marken
 */
var express = require('express');
var router = express.Router();
var marken = require('../controllers/MarkeController.js');
router.get('/:sessionId',marken.get);
router.get('/:sessionId/:MarkeId',marken.getMarke);
router.put('/:sessionId/:MarkeId',marken.saveMarke);
router.post('/:sessionId/new',marken.newMarke);


module.exports = router;
