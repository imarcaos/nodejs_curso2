const http= require('http');
const fs= require('fs');
const porta= process.env.PORT

const server= http.createServer((req, res)=>{
    fs.appendFile('teste.txt', 'Curso de NodeJS', (err)=>{
        if(err) throw err
        console.log('Ficheiro Criado!');
        res.end();
    });
})

server.listen(porta || 3000, ()=> {console.log('Servidor Online!')});