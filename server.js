var express = require('express');
var app = express();
var db=require('./database');
var cors = require('cors')
app.use(cors())


var bodyParser = require('body-parser');
app.use(bodyParser.json());//สำคํญต้องใช้
app.use(bodyParser.urlencoded({
extended: true
}));
// index page


    //add routing
    // index page

    app.get('/api/json', function (req, res) {
        res.status(200).json(output);
        });

        app.get('/api/employees',db.getEmployees);


    var port = process.env.PORT || 8080;
app.listen(port, function () {
console.log('App is running on http://localhost:' + port);
});