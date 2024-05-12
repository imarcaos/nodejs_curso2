(async ()=>{
    const db= require('./db')

    // Inserir Cliente
    // console.log('Novo cliente inserirdo ')
    // const name= "Margarida"
    // const age= "11"
    // await db.inserirCliente({nome:name, idade:age})
    
    // Atualizar Cliente
    // const id= 3
    // const name= "Alexandre"
    // const age= "14"    
    // await db.atualizarCliente(id, {nome:name, idade:age})
    // console.log('Cliente: ' +id+  ' Atualizado')

    const id= 3
    await db.apagarCliente(id)
    console.log('Cliente: ' +id+  ' Apagado')

    console.log('Obter todos os clientes')
    const clientes= await db.todosClientes()
    console.log(clientes)
})()