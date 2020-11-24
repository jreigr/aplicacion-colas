// const { io } = require("../../server/server");



// Comando para establecerla conexión
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
});

socket.on('estadoActual',(resp)=>{
    label.text(resp.actual);
});

$('button').on('click', function(){
    socket.emit('siguienteTicket',null,function(siguienteTicket){
        label.text(siguienteTicket);
    });

});