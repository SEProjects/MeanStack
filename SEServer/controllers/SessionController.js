/**
 * Created by kevin on 04.06.15.
 */
var soap = require('soap');
var app = require('../app');


var url = 'http://192.168.1.109:8080/Autovermietung_OnlineSystem/OnlineAdminIntegration?wsdl';
/**
 * Bestätigt die Rechnung als Bezahlt auf dem Server
 * @body email AdminEmail
 * @body password password des Admins
 */
exports.post = function(req, res){
         var args = {email: req.body.email, password: req.body.password};
        soap.createClient(global.urlforSoap, function (err, client) {
            //client.test(args, function(err, result) {
            console.info(req.body);
            client.Adminlogin(args, function (err, result) {


                res.jsonp(result.return);


            })




            //});
        }, global.urlforSoap2);

    }
//nicht benutzt
exports.show = function(req, res){
    req.params.sessionId
    var args = {Sessionid:   req.params.sessionId};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {
        console.info(req.body);
        client.test(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);


}


