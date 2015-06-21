/**
 * Created by kevin on 07.06.15.
 */

var soap = require('soap');
/**
 * Liefert alle Rechnungen
 * @params Sessionid Sessionid des Users
 */
exports.get= function(req, res){

    var args = {Sessionid:   req.params.sessionId};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client. getAllRechnungen(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 *Liefert die ausgewählte Rechnung auf dem Server
 * @params Sessionid Sessionid des Users
 * @params Rechnungsid
 */
exports.getRechnung= function(req, res){

    var args = {Sessionid: req.params.sessionId, Rechnungsid:req.params.Rechnungsid};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.getRechnung(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
//nicht benutzt
exports.newRechnung= function(req, res){

    var args = {Sessionid: req.params.sessionId};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.createMarke(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 * Erstellt alle Rechnungen auf dem Server
 * @params Sessionid Sessionid des Users
 */
exports.createAllRechnungen= function(req, res){

    var args = {Sessionid: req.params.sessionId};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.createAllRechungen(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 * Bestätigt die Rechnung als Bezahlt auf dem Server
 * @params Sessionid Sessionid des Users
 * @params Rechnungsid
 */
exports.Rechnungenbestaetigen= function(req, res){

    var args = {Sessionid: req.params.sessionId,Rechnungsid: req.params.Rid};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client. Zahlungbestaetigen(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 * Liefert den Rabatt der Rechnung auf dem Server
 * @params Sessionid Sessionid des Users
 * @params Rechnungsid
 *
 */
exports.getRechnungsRabatt= function(req, res){

    var args = {Sessionid: req.params.sessionId, Rechnungsid: req.params.Rid};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.getRechnungsRabatt(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 * Bestätigt die Rechnung als Bezahlt auf dem Server
 * @params Sessionid Sessionid des Users
 * @params Rechnungsid
 * @body rabatt neuer Rabatt
 */
exports.saveRechnungsRabatt= function(req, res){

    var args = {Sessionid: req.params.sessionId, Rechnungsid: req.params.Rid,Rabatt: req.body.rabatt};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.saveRechnungsRabatt(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}





