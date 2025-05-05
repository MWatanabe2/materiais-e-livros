import React, {useState, useEffect} from 'react';

import { SafeAreaView, View, FlatList, StyleSheet } from 'react-native';
import ItemCliente from '../components/ItemCliente';

import {buscaClientes} from '../BancoDeDados/CadastroDAO';

export default function ListaClientes() {
  const [lista, setLista] = useState([]);

  useEffect(()=> {
    async function exibirLista(){
      await mostrarClientes();
    }
    exibirLista();
  });

  async function mostrarClientes(){
    //captura os clientes do banco de dados e atribui a variavel clientes
    const clientes = await buscaClientes();
    //associa a variavel clientes a lista
    setLista(clientes);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={lista}
        renderItem={({ item }) => (
          <View>
            <ItemCliente
              id={item.id}
              nome={item.nome}
              email={item.email}
              telefone={item.telefone} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
