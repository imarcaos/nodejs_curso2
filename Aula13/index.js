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

    // Apagar objeto - deleteMany e deleteOne
    // É aconselhável apagar objetos pelo id, mas podemos usar por exemplo:
    // const query= { _id: ObjectId('664260b354ccc59a2a05eb95') }
    /* const query= {curso: 'Curso de NodeJS'}
    try {
      await dbo.collection(colecao).deleteOne( query );
      console.log('Objeto Apagado com Sucesso');
    } catch (e) {
        console.log(e);
    } */

    // Listar Objetos
    const res= await dbo.collection(colecao).find({}).toArray();
    console.log(res)
    console.log("--- Fim da Listagem de Objetos ---\n")

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