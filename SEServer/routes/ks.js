/**
 * Created by kevin on 07.06.15.
 * Antwort Routen für Alle KS aufrufe
 */
var express = require('express');
var router = express.Router();
var ks = require('../controllers/KSController.js');
router.get('/:sessionId',ks.get);
router.get('/:sessionId/:KSId',ks.getKS);
router.put('/:sessionId/:KSId',ks.saveKS);
router.post('/:sessionId/new',ks.newKS);


module.exports = router;
