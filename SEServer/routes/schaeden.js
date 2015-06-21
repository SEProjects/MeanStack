/**
 * Created by kevin on 04.06.15.
 * Antwort Routen für Alle Schaden
 */
var express = require('express');
var router = express.Router();
var schaden = require('../controllers/SchadenController');

router.get('/:sessionId',schaden.get);

router.delete('/:sessionId/:id',schaden.delete);
module.exports = router;
