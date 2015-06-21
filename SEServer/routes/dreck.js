/**
 * Created by kevin on 04.06.15.
 * Antwort Routen für Alle Schaden
 */
var express = require('express');
var router = express.Router();
var dreck = require('../controllers/DreckController');

router.get('/:sessionId',dreck.get);
router.delete('/:sessionId/:id',dreck.delete);
module.exports = router;
