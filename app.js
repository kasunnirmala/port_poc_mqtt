const express = require('express');
const app = express();
var http = require('http').createServer(app);
 require('./db');
const cors = require('cors');

// const io = require('socket.io')(http);
// const DeviceDataRoute = require('./routes/deviceData');

app.use(cors());


http.listen(4445, () => {
    console.log('listening on *:4445');
});



require('./mqtt');
//require('./tcp');
