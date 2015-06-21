/**
 * Created by kevin on 04.06.15.
 */
var soap = require('soap');

/**
 * Holt alle Autos vom Server
 * @params Sessionid Sessionid des Clients
 */
exports.get= function(req, res){

    var args = {Sessionid:   req.params.sessionId};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.getAllAutos(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 * holt das selectierte Auto vom Server.
 * @params Sessionid Sessionid des Clients
 * @params AAid AutoArt id
 */
exports.getAuto= function(req, res){

    var args = {Sessionid: req.params.sessionId, Autoid:req.params.AutoId};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.getAuto(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 * speichert Autodetails auf dem Server
 * @params Sessionid Sessionid des Clients
 * @params AutoID
 * @body Autoid des Autos
 * @body bez Die Bezeichnungs des Autos
 * @body AAid die Autoartid des Autos
 */
exports.saveAuto= function(req, res){

    var args = {Sessionid: req.params.sessionId, Autoid:req.params.AutoId,AAid: req.body.aa,bez: req.body.bez};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.saveAuto(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
//noch nicht implementiert
exports.deleteAuto= function(req, res){

    var args = {Sessionid: req.params.sessionId, Kundeemail:req.params.AutoId};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.deleteAuto(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 * erzeugt ein neues Auto auf dem Server
 * @params Sessionid Sessionid des Clients
 * @body bez Die Bezeichnungs des Autos
 * @body AAid die Autoartid des Autos
 */
exports.createAuto= function(req, res){

    var args = {Sessionid: req.params.sessionId, AAid: req.body.aa,bez: req.body.bez};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.createAuto(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}


