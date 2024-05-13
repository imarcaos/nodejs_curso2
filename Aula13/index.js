const {MongoClient} = require('mongodb');
const url= "mongodb://127.0.0.1:27017";

async function run() {
  const client = new MongoClient(url);

  try {
    await client.connect();

    const dbo = client.db('cursos');
    const obj = { curso: 'Curso de NodeJS', canal: 'CFB Cursos' };
    const colecao = 'curso2_node';
    
    await dbo.collection(colecao).insertOne(obj);
    console.log('Um novo curso inserido');
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
// Código passado no comentário
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