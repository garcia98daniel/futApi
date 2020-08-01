const express = require('express');
const app = express();

const { config } = require('./config/index');
const friendsApi = require('./routes/friends.js');
const userMatchesApi = require('./routes/userMatches.js');
const usersApi = require('./routes/users.js');
const authApi = require('./routes/auth');


// middleWare BODY PARSER
app.use(express.json());

authApi(app);
usersApi(app);
friendsApi(app);
userMatchesApi(app);

app.listen(config.port, function(){
    console.log(`Listenig http://localhost:${config.port}`);
});