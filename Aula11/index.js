const http= require('http')
const eventos= require('events')
const eventoEmissor= new eventos.EventEmitter()

const final= ()=>{console.log('Fim do Processo')}

eventoEmissor.on('msg', ()=>{console.log('Curso de Node')})
eventoEmissor.on('fim', final)

const porta= process.env.PORT || 3000
const retorno= ()=>{console.log('Servidor Online!')}
const servidor= http.createServer((req, res)=>{
    eventoEmissor.emit('msg')
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write('Curso NodeJS')
    eventoEmissor.emit('fim')
    res.end()
})
servidor.listen(porta, retorno)