var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);


io.on('connection',(socket)=>{

socket.on('client_msg',(res)=>{
    console.log('Client is sending message ',res)
    // socket.emit('server_reply',{msg : "Respond is "+res.message})
    io.in(res.group).emit ('server_reply',{date : new Date(),user : res.user,msg : res.msg})
})

socket.on('user_join',(data)=>{
    console.log('Jroup joined ',data)
    socket.join(data.group);
    io.in(data.group).emit('server_reply',{date : new Date(),user : data.user,msg : " Joined the group"})
})


})




server.listen(3001,()=>{


    console.log('Server starts')
})