import {conexao} from './CadastroDB';

const db = conexao;

//Criar a tabela cliente no banco de dados
export function criarTabela(){
  db.transaction((tx) => {
    tx.executeSql('CREATE TABLE IF NOT EXISTS clientes (' +
                  'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
                  'nome TEXT NOT NULL UNIQUE,' +
                  'email TEXT NOT NULL,' +
                  'telefone TEXT NOT NULL);',
                  [],
                  (_, error) => {
                    console.log(error)
                  });
  })
}

export async function adicionaCliente(cliente){
  //Promise
  return new Promise((resolve, reject)=>{
    db.transaction((tx)=>{
      const sql = 'INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?);';

      tx.executeSql(sql,
                    [cliente.nome, cliente.email, cliente.telefone],
                    (_, {rowsAffected, insertId}) => {
                      if(rowsAffected > 0){
                        console.log('Cliente gravado');
                        resolve(insertId);
                      }else{
                        reject('Erro ao gravar o cliente: ' + JSON.stringify(cliente));
                      }
                    }, (_, error)=> reject(error));
    });
  });
}

export async function buscaClientes(){
  return new Promise((resolve, reject)=> {
    db.transaction((tx) => {
      const sql = 'SELECT * FROM clientes;';

      tx.executeSql(sql, [], (transaction, resultado) => {
        resolve(resultado.rows._array);
      }, (_, error) => reject (error));
    });
  });
}

export async function apagaCliente(nome){
  return new Promise((resolve, reject) =>{
    db.transaction((tx) => {
      const sql = 'DELETE FROM clientes WHERE nome = ?;';
      tx.executeSql(sql, [nome],() =>{
        resolve('Cliente removido com sucesso!');
      },(_, error) => reject (error));
    });
  });
}

export async function alteraCliente(cliente){
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      const sql = 'UPDATE clientes SET nome=?, email=?, telefone=? WHERE id=?';
      tx.executeSql(sql, [cliente.nome, cliente.email, cliente.telefone, cliente.id],() => {
        resolve('Cliente alterado com sucesso!');
      },(_, error) => reject (error));
    });
  });
}