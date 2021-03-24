const express = require('express');
const app = express();
const port = 3001;
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', (socket) => {


    socket.on('move', (msg) => {

        socket.broadcast.emit('move', msg);
    })
})

http.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})