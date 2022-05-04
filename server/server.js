const path = require('path')
const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname,'../public')
const port = process.env.PORT || 3000
let app = express()
let server = http.createServer(app)
let io = socketIO(server)


io.on('connection', (socket) => {
    console.log("A new user just connect");

    socket.on('disconnect', () => {
        console.log("User was disconnected");
    })
})
app.use(express.static(publicPath))

server.listen(port, () => {
    console.log(`Service is up on port ${port}`);
})