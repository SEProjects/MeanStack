/**
 * Created by kevin on 10.06.15.
 * Antwort Routen für Alle SRechnungsAufrufe
 */

var express = require('express');
var router = express.Router();
var rechnung = require('../controllers/RechnungsController.js');

router.get('/:sessionId',rechnung.get);
router.post('/:sessionId',rechnung.createAllRechnungen);

router.get('/:sessionId/:Rechnungsid',rechnung.getRechnung);
router.put('/zahlung/:sessionId/:Rid',rechnung.Rechnungenbestaetigen);
router.get('/rabatt/:sessionId/:Rid',rechnung.getRechnungsRabatt);
router.put('/rabatt/:sessionId/:Rid',rechnung.saveRechnungsRabatt);



module.exports = router;