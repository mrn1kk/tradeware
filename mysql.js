//conecta-banco-mysql.js

const mysql = require('mysql');

// Cria uma conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'usuario',
  password: 'senha',
  database: 'nome_do_banco_de_dados'
});

// Conecta-se ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }

  console.log('Conexão bem sucedida ao banco de dados!');
});