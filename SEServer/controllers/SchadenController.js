/**
 * Created by kevin on 21.06.15.
 */
var soap = require('soap');

/**
 * holt alle Schäden vom Server über einen Soap aufruf.
 * @params Sessionid Sessionid des Clients
 */
exports.get= function(req, res){

    var args = {Sessionid:   req.params.sessionId};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.getAllSchaeden(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
exports.delete= function(req, res){

    var args = {Sessionid:   req.params.sessionId,SchadenId: req.params.id};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.deleteSchaden(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}