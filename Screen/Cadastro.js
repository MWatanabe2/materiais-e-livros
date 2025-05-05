import { useState, useEffect } from 'react';
import {useNavigation, useRoute} from '@react-navigation/native'
import {adicionaCliente, alteraCliente} from '../BancoDeDados/CadastroDAO';
import Cliente from '../Modelo/Cliente';

// Importação de comandos
import { Text, StyleSheet, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';

// Página Cadastro
export default function Cadastro() {
  
  const navigation = useNavigation();
  const route = useRoute();
  const clienteEnviado = route.params?.cliente;

  const [id, setId] = useState();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [telefone, setTelefone] = useState();

  useEffect(()=> {
    function pegaCliente(){
      //Se o cliente recebido de Listagem estiver preenchido
      if(clienteEnviado != undefined){
        setId(clienteEnviado.id);
        setNome(clienteEnviado.nome);
        setEmail(clienteEnviado.email);
        setTelefone(clienteEnviado.telefone);
      }
    }
    pegaCliente();
  }, [clienteEnviado]);

  async function novoCliente(){
    if(nome == '' || email == '' || telefone == ''){
      alert('Todos os campos devem ser preenchidos');
      return;
    }
    const cliente = new Cliente(null, nome, email, telefone);
    await adicionaCliente(cliente);
    limparDados();
    navigation.navigate('Home');
  }

  async function editarCliente(){
    if(nome == '' || email == '' || telefone == ''){
      alert('Todos os campos devem ser preenchidos');
      return;
    }
    const cliente = new Cliente(id, nome, email, telefone);
    await alteraCliente(cliente);
    limparDados();
    navigation.navigate('Home');
  }

  function limparDados(){
    setNome('');
    setEmail('');
    setTelefone('');
  }

  return (
    <ScrollView style={styles.container}>

    {/* Texto principal da página */}
      <View style={styles.areaCabecalho}>
        <Text style={styles.textoCabecalho}>Cadastro</Text>
      </View>

      {/* Campos para o usuário preencher */}
      <View style={styles.areaInputs}>
        <TextInput
          style={styles.textoInputs}
          value={nome}
          onChangeText={(valor) => setNome(valor)}
          placeholder="Digite o nome"
        />
        <TextInput
          style={styles.textoInputs}
          value={email}
          placeholder="Digite o email"
          onChangeText={(valor) => setEmail(valor)}
        />
        <TextInput
          style={styles.textoInputs}
          value={telefone}
          placeholder="Digite o telefone"
          keyboardType={'numeric'}
          onChangeText={(valor) => setTelefone(valor)}
        />
      </View>

      <View style={styles.areaBotoes}>
        {(clienteEnviado == undefined) ? (<TouchableOpacity style={styles.botao} onPress = {novoCliente}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>) : (<TouchableOpacity style={styles.botao} onPress = {editarCliente}>
          <Text style={styles.textoBotao}>Alterar</Text>
        </TouchableOpacity>)}

        <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('ListaClientes')}>
        <Text style={styles.textoBotao}>Lista de Clientes</Text>
      </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

// Área de estilo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },areaCabecalho:{
    alignItems: 'center',
    marginBottom: 10,
  },textoCabecalho:{
    fontSize: 40,
    fontWeight: 'bold',
  },areaInputs:{
    alignSelf: 'center',
    width: '100%',
    marginTop: 50,
    marginBottom: 15,
  },textoInputs: {
    fontSize: 20,
    borderWidth: 2,
    padding: 5,
    marginBottom: 3,
  }, areaBotoes: {
    marginTop: 10,
    width: '100%',
    alignSelf: 'center',
  }, botao:{
    backgroundColor: '#73c0ff',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 5,
  },textoBotao:{
    color: 'white',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
  }
});