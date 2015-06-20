/**
 * Created by kevin on 04.06.15.
 */
var soap = require('soap');

var url = 'http://192.168.1.109:8080/Autovermietung_OnlineSystem/OnlineAdminIntegration?wsdl';
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

exports.saveUser= function(req, res){

    var args = {Sessionid: req.params.sessionId, Kundeemail:req.params.userId,admin: req.body.admin,fsnummer: req.body.fsnummer,kvorname: req.body.kvorname, knachname: req.body.knachname,pan:req.body.pan,saf:req.body.saf};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.saveKunde(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
exports.emailbestaetigen=function(req,res){

    var args = {Hash: req.params.hash};
    soap.createClient(global.urlforSoap, function (err, client) {
       console.info(args);
        client.emailbestaetigen(args, function (err, result) {

            res.render('hash.jade');


        })
    }, global.urlforSoap2)
}
