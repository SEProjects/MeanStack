/**
 * Created by kevin on 07.06.15.
 * Antwort Routen für Alle Autoaufrufe
 */
var express = require('express');
var router = express.Router();
var auto = require('../controllers/AutoController.js');
router.get('/:sessionId',auto.get);
router.get('/:sessionId/:AutoId',auto.getAuto);
router.put('/:sessionId/:AutoId',auto.saveAuto);
router.post('/:sessionId/new',auto.createAuto);


module.exports = router;
