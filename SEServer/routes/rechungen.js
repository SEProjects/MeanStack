/**
 * Created by kevin on 10.06.15.
 */

var express = require('express');
var router = express.Router();
var rechnung = require('../controllers/RechnungsController.js');
/* GET users listing. */
router.get('/:sessionId',rechnung.get);
router.post('/:sessionId',rechnung.createAllRechnungen);
/*

router.put('/:sessionId/:AAId',rechnung.saveRechnung);

 */
router.get('/:sessionId/:Rechnungsid',rechnung.getRechnung);
router.put('/zahlung/:sessionId/:Rid',rechnung.Rechnungenbestaetigen);
router.get('/rabatt/:sessionId/:Rid',rechnung.getRechnungsRabatt);
router.put('/rabatt/:sessionId/:Rid',rechnung.saveRechnungsRabatt);



module.exports = router;