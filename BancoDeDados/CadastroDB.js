//import do sqlite (necessario add dependency)
import * as SQLite from 'expo-sqlite';

//Nome do banco de dados
const nome_database = 'Cadastro.db';
//Versão do banco de dados
const versao_database = '1.0';

//Retorna uma conexao com o banco de dados
const openConection = () => {
  const db = SQLite.openDatabase(nome_database, versao_database);
  return db;
}

export const conexao = openConection();