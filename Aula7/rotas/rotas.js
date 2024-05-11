const express= require('express')
const rotas= express.Router()

let cursosInfo= [
    {'curso':'node','info':'Curso de Node'},
    {'curso':'react','info':'Curso de React'},
    {'curso':'java','info':'Curso de Java'},
    {'curso':'arduino','info':'Curso de Arduino'}
]

//
rotas.get('/', (req, res)=>{
    res.json({ola:'Seja bem vindo'})
})

rotas.get('/:cursoid', (req, res)=>{
    const cursoURL= req.params.cursoid
    let cursoI=cursosInfo.find(i=>i.curso == cursoURL) //I=informação
    if(!cursoI) {
        res.status(404).json(
            {erro:'Curso não encontrado',cursoPesquisado:cursoURL}
        )
    } else {
        res.status(200).json(cursoI)
    }
})

module.exports= rotas