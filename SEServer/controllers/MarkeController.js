/**
 * Created by kevin on 07.06.15.
 */

var soap = require('soap');

var url = 'http://192.168.1.109:8080/Autovermietung_OnlineSystem/OnlineAdminIntegration?wsdl';
/**
 * Holt alle Marken vom Server
 * @params Sessionid Sessionid des Users
 * */
exports.get= function(req, res){

    var args = {Sessionid:   req.params.sessionId};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client. getAllMarken(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 * Holt die Selektierte Marke vom Server
 * @params Sessionid Sessionid des Users
 * @params MarkeId
 */
exports.getMarke= function(req, res){

    var args = {Sessionid: req.params.sessionId, MarkenId:req.params.MarkeId};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.getMarke(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 * Speichert die Marke auf dem Server
 * @params Sessionid Sessionid des Users
 * @params MarkeId
 * @body Markenname
 */
exports.saveMarke= function(req, res){

    var args = {Sessionid: req.params.sessionId,MarkenId: req.params.MarkeId,Markenname: req.body.markenname};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.saveMarke(args, function (err, result) {


            res.jsonp(result.return);


        })



        //});
    }, global.urlforSoap2);

}
/**
 * Legt eine neue Marke auf dem Server an
 * @params Sessionid Sessionid des Users
 * @body Markenname
 */
exports.newMarke= function(req, res){

    var args = {Sessionid: req.params.sessionId,Markenname: req.body.markenname};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.createMarke(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}


