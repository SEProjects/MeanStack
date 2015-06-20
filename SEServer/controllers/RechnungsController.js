/**
 * Created by kevin on 07.06.15.
 */

var soap = require('soap');

var url = 'http://192.168.1.109:8080/Autovermietung_OnlineSystem/OnlineAdminIntegration?wsdl';
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


exports.newRechnung= function(req, res){

    var args = {Sessionid: req.params.sessionId,Markenname: req.body.markenname};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.createMarke(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
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





