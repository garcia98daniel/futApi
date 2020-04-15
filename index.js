const express = require('express');
const app = express();

const { config } = require('./config/index');
const usersApi = require('./routes/users.js');
usersApi(app);
// app.get('/', function(req, res){
//     res.send("hello world");
// });

// app.get('/json', function(req, res){
//     res.json({hello:'world'});
// });

// app.get('/bisiesto', function(req, res){
//     year=2020;
//     if (((year % 4 == 0) && (year % 100 != 0 )) || (year % 400 == 0)){
//         res.send(`El año ${year}, es bisisento`);
//     }else{
//         res.send(`El año ${year}, no es bisisento`);
//     }
    
// });



app.listen(config.port, function(){
    console.log(`Listenig http://localhost:${config.port}`);
});