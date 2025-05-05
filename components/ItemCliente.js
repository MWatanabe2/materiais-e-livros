import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {apagaCliente} from '../BancoDeDados/CadastroDAO';
import {useNavigation} from '@react-navigation/native';

export default function ItemCliente({ id, nome, email, telefone }) {
  const navigation = useNavigation();

  function enviaDados(){
    cliente = {'id':id, 'nome':nome, 'email':email, 'telefone':telefone};
    navigation.navigate("Cadastro", {'cliente':cliente});
  }

  return (
    <View style={styles.container}>
      <View style={styles.dadosCliente}>
        <TouchableOpacity onPress={enviaDados}>
          <Text style={styles.textoCliente}>Nome: {nome} </Text>
          <Text style={styles.textoCliente}>Email: {email}</Text>
          <Text style={styles.textoCliente}>Telefone: {telefone}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botaoDelete}>
        <TouchableOpacity onPress={()=> apagaCliente(nome)}>
          <Text style={styles.textoBotao}>Remover</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#d9d9d9',
    borderWidth: 1,
    borderColor: 'black',
  },
  dadosCliente: {
    padding: 10,
    width: '65%',
    marginRight: '5%',
  },
  textoCliente: {
    fontSize: 16,
    color: 'black',
  },
  botaoDelete: {
    backgroundColor: '#73c0ff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    height: '60%',
    alignSelf: 'center',
    marginHorizontal: -10,
    borderWidth: 1,
    borderColor: 'black',
  },
  textoBotao: {
    color: 'white',
    fontSize: 20,
  },
});