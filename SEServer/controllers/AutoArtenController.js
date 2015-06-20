/**
 * Created by kevin on 08.06.15.
 */
var soap = require('soap');
var fs = require('fs');
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





