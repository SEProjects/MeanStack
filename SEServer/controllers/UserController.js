/**
 * Created by kevin on 04.06.15.
 */
var soap = require('soap');

/**
 * Liefert Alle Kunden
 * @params Sessionid Sessionid des Users
 */
exports.get= function(req, res){

    var args = {Sessionid:   req.params.sessionId};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client. getAllKunden(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 * Holt den Benutzer vom Server
 * @params Sessionid Sessionid des Users
 * @params Kundeemail
 */
exports.getUser= function(req, res){

    var args = {Sessionid: req.params.sessionId, Kundeemail:req.params.userId};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client. getKunde(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 * Speichert den Benutzer auf dem Server
 * @params Sessionid Sessionid des Users
 * @params Kundenemail
 * @params kvorname Vorname des Kunden
 * @params knachname Nachname des Kunden
 * @params fsnummer  Führerscheinnummer des Kunden
 * @params pan Personalausweißnummer des Kunden
 * @params saf the saf des Kunden
 * @params admin Adminrechte
 */
exports.saveUser= function(req, res){

    var args = {Sessionid: req.params.sessionId, Kundeemail:req.params.userId,admin: req.body.admin,fsnummer: req.body.fsnummer,kvorname: req.body.kvorname, knachname: req.body.knachname,pan:req.body.pan,aktive:req.body.aktive,strasse: req.body.strasse};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.saveKunde(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 * Speichert den Benutzer auf dem Server
 * @params Hash
 * return HTML!!!
 */

exports.emailbestaetigen=function(req,res){

    var args = {Hash: req.params.hash};
    soap.createClient(global.urlforSoap, function (err, client) {
       console.info(args);
        client.emailbestaetigen(args, function (err, result) {

            res.render('hash.jade');


        })
    }, global.urlforSoap2)
}
