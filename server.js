var express = require("express");

var app = express();

app.use("/", express.static("public"));

app.use(function (req, res, next){
    res.setHeader('Access-Control-Allow_Orign', '*');
    res.setHeader('Access-Control-Allow_Methods', 'Get');
    res.setHeader('Access-Control-Allow_Headers', 'X-Requested-Wish,content-type');
    next();
});

var server = app.listen(process.env.PORT || 8080, function(){
    var port = server.address().port;
    console.log("App now running on port", port);
});

