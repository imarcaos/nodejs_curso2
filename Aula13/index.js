const {MongoClient} = require('mongodb');
const url= "mongodb://127.0.0.1:27017";

async function run() {
  const client = new MongoClient(url);

  try {
    await client.connect();

    const dbo = client.db('cursos');
    const colecao = 'curso2_node';

       
    /* // Inserir    
    const obj = { curso: 'Java', canal: 'Udemy' };
    await dbo.collection(colecao).insertOne(obj);
    console.log('Um novo curso inserido'); */

    // Inserir muitos
    /* const obj= [
      {curso:'Curso de Javascript', canal:'CFB Cursos'},
      {curso:'Curso de Javascript', canal:'CFB Cursos'},
      //{curso:'Curso de C++', canal:'Youtube'}
    ]
    try {
      const count= await dbo.collection(colecao).insertMany(obj);
      console.log(count.insertedCount +' Objeto(s) inserido(s) com Sucesso');
    } catch (e) {
        console.log(e);
    } */


    /* // Pesquisar
    const query= {}
    const query= {curso: 'Curso de NodeJS'}
    const res= await dbo.collection(colecao).findOne(query)
    console.log(res) */

    /* // expressões regulares
    const query= {curso: /N./}
    const res= await dbo.collection(colecao).find(query).toArray();
    console.log(res) */

    /* // Ordenar Sort
    const ordenar= {curso:1} //1 crescente, -1 decrescente
    const query= {}
    const res= await dbo.collection(colecao).find(query).sort(ordenar).toArray();
    console.log(res) */

    /* // Apagar objeto - deleteMany e deleteOne
    // É aconselhável apagar objetos pelo id, mas podemos usar por exemplo:
    //const query= { _id: ObjectId('6643d37c6784efa541ad9401') }
    //const query= {curso: 'Curso de NodeJS'}
    //const query= {curso:/.t/}
    try {
      const count= await dbo.collection(colecao).deleteOne( query );      
      //const count= await dbo.collection(colecao).deleteMany( query );
      console.log(count.deletedCount +' Objeto(s) Apagado(s) com Sucesso');
    } catch (e) {
        console.log(e);
    } */

    /* // Modificar/Atualizar objeto - updateOne e updateManye
    //const query= { _id: ObjectId('6643d37c6784efa541ad9401') }
    //const query= {curso: 'Curso de NodeJS'}
    const query= {curso:'Curso de Javascript'}
    const novoObj= {$set: {curso:'Javascript'}}
    try {
      //const count= await dbo.collection(colecao).updateOne(query, novoObj);      
      const count= await dbo.collection(colecao).updateMany(query, novoObj);
      console.log(count.modifiedCount +' Objeto(s) Atualizado(s) com Sucesso');
    } catch (e) {
        console.log(e);
    } */

    // Listar Objetos com limite de objetos retornados
    const limite= 3
    const query= {curso:/C./}
    const res= await dbo.collection(colecao).find(query).limit(limite).toArray();
    console.log(res)
    console.log("--- Fim da Listagem de Objetos ---\n")

    /* // Listar Objetos
    const res= await dbo.collection(colecao).find({}).toArray();
    console.log(res)
    console.log("--- Fim da Listagem de Objetos ---\n") */

  } finally {
    await client.close();
  }
}

run().catch(console.dir);

/*
// código antigo do professor
mongodb.connect(url, (erro, banco)=>{
    if(erro) throw erro;
    const dbo= banco.db("cursos")
    const obj= {nome:"Marcos", idade:"49"}
    const colecao= "curso2_node"
    dbo.collection(colecao).insertOne(obj, (erro, resultado)=>{
        if(erro) throw erro
        console.log("Novo nome inserido")
        banco.close()
    })
})
*/

/*
// Código Novo passado no comentário
const { MongoClient } = require('mongodb');
const uri = "<insertpath>";

async function run() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const dbo = client.db('nodejscurso');
    const obj = { curso: 'Curso de NodeJS', canal: 'CFB Cursos' };
    const colecao = 'cursos';
    
    await dbo.collection(colecao).insertOne(obj);
    console.log('Um novo curso inserido');
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
*/