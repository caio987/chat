const express = require('express')
const app = express();
const http = require('http').createServer(app);
const path = require('path');

const io = require('socket.io')(http);

app.use(express.static(__dirname))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));


// Evento quando o cliente se conecta ao servidor 
io.on('connection', (socket) => {
    console.log('Úsuario conectado');

    // Evento para cliente enviar uma mensagem
    socket.on('chat message', (data) => io.emit('chat message', data));

    // Evento para o cliente se desconectardo servidor
    socket.on('disconnect', () => console.log('Úsuario desconectado'));
})

// Iniciar o servidor na porta 3000
http.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000 - link http://localhost:3000`)
});