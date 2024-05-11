const http= require('http');

http.createServer((req, resp)=>{
    resp.writeHead(200, {
        'Content-Type':'text/plain'
    });
    resp.write('Pagina Carregada\nCurso NodeJS\n');
    resp.end();
}).listen(1337);
