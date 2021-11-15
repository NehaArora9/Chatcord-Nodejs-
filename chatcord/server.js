//
const path=require('path');
//
const http = require('http');
//
const express = require('express');
//
const socketio =require('socket.io');
//
const app = express();
//create a server
const server = http.createServer(app);
//
const io =socketio(server);
//set static folder
app.use(express.static(path.join(__dirname,'public')));
//run when a client connects
io.on('connection',socket => {
  console.log('New WS Connection...')
  socket.emit('message','Welcome to ChatCord!');
  //broadcast when a user connects
  socket.broadcast.emit();
  
  
});
//set enviroment
 const PORT =3000 || process.env.PORT;
 server.listen(PORT,() => console.log(`Server running on port ${PORT}`));
