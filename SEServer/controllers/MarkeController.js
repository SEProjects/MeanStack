/**
 * Created by kevin on 07.06.15.
 */

var soap = require('soap');

var url = 'http://192.168.1.109:8080/Autovermietung_OnlineSystem/OnlineAdminIntegration?wsdl';
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


