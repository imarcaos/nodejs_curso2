# NodeJS - Curso que estou a fazer


## Apontamentos e códigos para consulta do Curso que estou a fazer
Data início: 2024/05/10

Estou a seguir um curso de NodeJs pela web, esta página server para deixar anotações para futuras consultas.

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

