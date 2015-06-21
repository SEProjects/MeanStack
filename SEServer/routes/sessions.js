/**
 * Created by kevin on 04.06.15.
 * Antwort Routen für Alle Sessionaufrufe
 */
var express = require('express');
var router = express.Router();
var session = require('../controllers/SessionController');
router.post('/', session.post);
router.get('/:sessionId',session.show);
module.exports = router;
