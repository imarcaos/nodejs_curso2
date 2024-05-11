const express= require('express')
const app= express()
const porta= process.env.PORT

app.get('/', (req, res)=>{
    res.send('Seja Bem vindo!')
})
app.get('/canal', (req, res)=>{
    res.json({canal:'Curso NodeJS'})
})

app.listen(porta || 3000, ()=>console.log('Servidor Online!'))