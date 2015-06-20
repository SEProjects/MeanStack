/**
 * Created by kevin on 04.06.15.
 */
var soap = require('soap');

var url = 'http://192.168.1.109:8080/Autovermietung_OnlineSystem/OnlineAdminIntegration?wsdl';
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


