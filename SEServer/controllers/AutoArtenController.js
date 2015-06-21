/**
 * Created by kevin on 08.06.15.
 */
var soap = require('soap');
var fs = require('fs');
/**
 * holt alle Autoarten vom Server über einen Soap aufruf.
 * @params Sessionid Sessionid des Clients
 */
exports.get= function(req, res){

    var args = {Sessionid:   req.params.sessionId};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.getAllAA(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 * holt selectierte Autoart vom Server
 * @params Sessionid Sessionid des Clients
 * @params AAid gesuchte Autoart
 */
exports.getAA= function(req, res){

    var args = {Sessionid: req.params.sessionId, AAid:req.params.AAId};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {

        client.getAA(args, function (err, result) {


            res.jsonp(result.return);


        })




        //});
    }, global.urlforSoap2);

}
/**
 * Speichert Autoartendetails auf dem Server über einen Soap aufruf.
 * @params Sessionid Sessionid des Clients
 * @params AAid AutoArtid
 * @body beschreibung Beschreibung der Autoart
 * @body kofferraumvolumen Kofferraumvolumen der Autoart
 * @body kraftstoffverbrauch Kraftstoffverbrauch der Autoart
 * @body ks Kraftstoffid der Autoart
 * @body marke Markenid der Autoart
 * @body pjk Preis je Km der Autoart
 * @body ps Ps der Autoart
 * @body sitzanzahl Sitzanzahl der Autoart
 *
 */
exports.saveAA= function(req, res){

    var args = {Sessionid: req.params.sessionId, AAid:req.params.AAId,beschreibung: req.body.beschreibung,bildlink:req.body.bildlink, kofferraumvolumen: parseInt(req.body.kofferraumvolumen),kraftstoffverbrauch:req.body.kraftstoffverbrauch,
    ks:req.body.ks,marke:req.body.marke,pjk:req.body.pjk,ps:req.body.ps,sitzanzahl:req.body.sitzanzahl};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {
        console.info(args);
        client.saveAA(args, function (err, result) {


            res.jsonp(result.return);


        })






        //});
    }, global.urlforSoap2);

}
/**
 * erzeugt eine neue Autoart auf dem Server.
 * @params Sessionid Sessionid des Clients
 * @body beschreibung Beschreibung der Autoart
 * @body kofferraumvolumen Kofferraumvolumen der Autoart
 * @body kraftstoffverbrauch Kraftstoffverbrauch der Autoart
 * @body ks Kraftstoffid der Autoart
 * @body marke Markenid der Autoart
 * @body pjk Preis je Km der Autoart
 * @body ps Ps der Autoart
 * @body sitzanzahl Sitzanzahl der Autoart
 */

exports.newAA= function(req, res){

    var args = {Sessionid: req.params.sessionId, beschreibung: req.body.beschreibung,bildlink:req.body.bildlink, kofferraumvolumen: parseInt(req.body.kofferraumvolumen),kraftstoffverbrauch:req.body.kraftstoffverbrauch,
        ks:req.body.ks,marke:req.body.marke,pjk:req.body.pjk,ps:req.body.ps,sitzanzahl:req.body.sitzanzahl};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {
        console.info(args);
        client.createAA(args, function (err, result) {


            res.jsonp(result.return);


        })



        //});
    }, global.urlforSoap2);

};
/**
 * Legt ein neues Bild für die Autoarten über einen Soap aufruf an.
 * @params Sessionid Sessionid des Clients
 * @file Bild bildupload
 */
exports.createPic= function(req, res){
    console.log(req.files.file.path);




        // read binary data
        var bitmap = fs.readFileSync(req.files.file.path);
        // convert binary data to base64 encoded string
        console.info(new Buffer(bitmap).toString('base64'));

    var args = {Sessionid: req.params.sessionId,AAid: req.params.AAid, Bild: new Buffer(bitmap).toString('base64')};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {
        console.info(args);
        client.saveAABild(args, function (err, result) {


            res.jsonp(result.return);


        })



        //});
    }, global.urlforSoap2);



    }
/**
 * holt das Bild der Autoarten vom Server über einen Soap aufruf.
 * @params Sessionid Sessionid des Clients
 * @params AAid AutoArt id
 */
exports.getPic= function(req, res){






    var args = {Sessionid: req.params.sessionId,AAid: req.params.AAid};
    soap.createClient(global.urlforSoap, function (err, client) {
        //client.test(args, function(err, result) {
        console.info(args);
        client.getAABild(args, function (err, result) {


            res.jsonp(result.return);


        })



        //});
    }, global.urlforSoap2);



}





