/**
 * Created by kevin on 04.06.15.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(7777);
