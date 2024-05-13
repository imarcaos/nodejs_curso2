# NodeJS - Curso que estou a fazer


## Apontamentos e códigos para consulta do Curso que estou a fazer
Data início: 2024/05/10

Estou a seguir um curso de NodeJs pela web, esta página server para deixar anotações para futuras consultas.
Youtube: https://www.youtube.com/playlist?list=PLx4x_zx8csUjFC41ev2qX5dnr-0ThpoXE

Aqui neste Git ficarão os apontamentos e lista de exercícios e tarefas feitas durante as aulas
Os códigos estão divididos por Aulas ex.: Aula1, Aula2, ...
Sempre que houver enunciados, estarão juntamente com o código.

- Aula 1 - Introdução, instalação e 1º código
- Aula 2 - Criando um servidor simples em NodeJS
    - Site com código de estatus (erros e mensagens) HTTP: https://http.cat/
- Aula 3 - Criando rotas no Servidor
    - Especificando a rota no navegador e passando parâmetros - aula03b.js
        - ex.: http://localhost:3000/?nome=Marcos&curso=NodeJS
        - será apresentado a variável nome e curso na tela
- Aula 4 - Módulo FS para manipular ficheiros
    - readFile - lê o ficheiro
    - appendFile - Se o ficheiro não existir ele cria, se existir ele escreve no ficheiro existente
- Aula 5 - Criando Rotas usando o Express
    - Instalando o express na pasta do projeto "Aula5" em modo save
        - npm install express --save
- Aula 6 - Usando NodeJS no Repl.it
    - https://replit.com/
    - Código das Aulas 4 e 5 replicados para testar o site replit
- Aula 7 - Modularizando as rotas do App NodeJS
    - Na pasta do projeto vamos instalar as dependências do Express e do Router, ambos em modo save
        - npm install express --save
        - npm install router --save
- Aula 8 - NodeJS com base de dados MySQL Pt1- módulo mysql2
    - Conexões a BD, utilizar as definidas por nós.
    - Tem uma BD: curso_node tabela de nome: client_node ,campos: id(pk), nome(varchar 45), idade(varchar 45)
    - Instalar o módulo do MySQL mysql2
        - npm install mysql2 --save
    - Foi feita a consulta a BD onde já tinha um valor inserido e retornou os dados como era de esperar.
- Aula 9 - NodeJS com base de dados MySQL Pt2- módulo mysql2
    - Função Inserir cliente
- Aula 10 - NodeJS com base de dados MySQL Pt3- módulo mysql2
    - Função Atualizar cliente
    - Função Apagar cliente
- Aula 11 - Trabalhando com eventos EventEmitter()
    - Fizemos emissão de mensagens simples durante os eventos, deu para perceber que podemos criar códigos complexos durante dentro das emissões.
- Aula 12 -  Upload de ficheiros em NodeJs com  o módulo formidable
    - Instalar o módulo na pasta do projeto, Aula12
        - npm install formidable
- Aula 13 - Usando MongoDB com NodeJS Pt1
    - Instalar o módulo MongoDB
        -npm install 
    - No curso está sendo ensinado a conectar com o servidor online do MongoDB
    - Com o que aprendi no Curso1 de NodeJS, estou a conectar em uma BD local
    - Tenho instalado o Servidor MongoDB e o MongoShell (ver informação e manipular BD MongoDB)
    - Iniciar o Servidor MongoDB na linha de comandos
        - mongod
    - Verificar BD existentes
        - executar o mongo shell no terminal: mongosh
    - Depois de executar o node e o nosso ficheiro index.sh ele cria a BD:"cursos" e coleção: "cursos2_node" e insere os dados propostos.
    - Verificar se a coleção foi criada
        - no Mongo Shell: use cursos
    - Verificar os dados inseridos
        - no Mongo Shell e dentro da BD: db.cursos.find().pretty()
    - Retornou os dados como esperado.
- Aula 14 - Usando MongoDB com NodeJS Pt2
    - Método findOne e find
    - Solução para utilizar await e async como MongoDB e Node
        - https://stackoverflow.com/questions/47370487/node-js-mongodb-driver-async-await-queries
- Aula 15 - Usando MongoDB com NodeJS Pt3
    - Método find() com expressões regulares, exemplo parte código
    - const res= await dbo.collection(colecao).find({curso: /N./}).toArray();
- Aula 16 - Ordenando a pesquisa com o método SORT no MongoDB
    - Adicionar o método sort(campo:valor) a seguir ao find() valor=(1 crescente, -1 decrescente)
    - const res= await dbo.collection(colecao).find(query).sort(curso:1).toArray();