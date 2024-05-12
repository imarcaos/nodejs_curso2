(async ()=>{
    const db= require('./db')
    console.log('Inserir novo cliente: ')
    const name= "Margarida"
    const age= "11"
    await db.inserirCliente({nome:name, idade:age})

    console.log('Obter todos os clientes')
    const clientes= await db.todosClientes()
    console.log(clientes)
})()