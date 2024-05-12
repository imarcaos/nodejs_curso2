const conectar= async ()=>{
    if(global.conexao && global.conexao.state != 'disconected')
        return global.conexao
    const mysql= require('mysql2/promise')
    const con= mysql.createConnection("mysql://root:@localhost:3306/curso_node")
    console.log('Conectado ao BD')
    global.conexao= con
    return con
}

const todosClientes= async()=>{
    const con= await conectar()
    const [linhas]= await con.query('SELECT * FROM cliente_node')
    return await linhas
}

const inserirCliente= async(cliente)=>{
    const con= await conectar()
    const sql= 'INSERT INTO cliente_node (nome, idade) VALUES (?, ?)'
    const valores= [cliente.nome, cliente.idade]
    await con.query(sql, valores)
}

module.exports= {todosClientes, inserirCliente}