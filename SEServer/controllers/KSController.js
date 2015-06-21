/**
 * Created by kevin on 07.06.15.
 */

var soap = require('soap');

/**
 * Holt alle Kraftstoffarten vom Server
 * @params Sessionid Sessionid des Users
 */
exports.get= function(req, res){

    var args = {Sessionid:   req.params.sessionId};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client. getAllKS(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 * Holt die Selektierte KraftstoffArt vom Server
 * @params Sessionid Sessionid des Users
 * @params KSID
 */

exports.getKS= function(req, res){

    var args = {Sessionid: req.params.sessionId, KSId:req.params.KSId};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.getKS(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 * Speichert die KraftstoffArt auf dem Server
 * @params Sessionid Sessionid des Users
 * @params KSID Kraftstoffid
 * @body bezeichnung
 */
exports.saveKS= function(req, res){

    var args = {Sessionid: req.params.sessionId,KSId: req.params.KSId,KSbezeichnung: req.body.bezeichnung};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {
        console.info(req.body.bezeichnung);
        client.saveKS(args, function (err, result) {


            res.jsonp(result.return);


        })



        //});
    }, global.urlforSoap2);

}

exports.newKS= function(req, res){

    var args = {Sessionid: req.params.sessionId,KS: req.body.bezeichnung};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.createKS(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}


