const http= require('http');
const porta= 3000;
const host= '127.0.0.1'; // se não especificar, fica sempre o padrão

const servidor= http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    if(req.url == '/') {
        res.write('<h1>Seja bem vindo</h1>');
    } else if(req.url == '/canal') {
        res.write('<h1>Canal do Curso</h1>');
    } else if(req.url == '/curso') {
        res.write('<h1>Conheça nosso Curso</h1>');
    } else if(req.url == '/curso/node') {
        res.write('<h1>Curso de NodeJS</h1>');
    }
    res.end();
});
servidor.listen(porta, host, ()=>{ console.log('Servidor Online!');});