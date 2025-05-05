{/* Importação de algumas funções para personalizar a aplicação */}
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Screen/Home';
import ListaClientes from './Screen/ListaClientes';
import Cadastro from './Screen/Cadastro';

const Stack = createStackNavigator();

{/* Função principal da aplicação */}
export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        {/* Uso da função de navegação */}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="ListaClientes" component={ListaClientes} />
          </Stack.Navigator>
        </NavigationContainer>

        {/* Personalização da aplicação */}
        <StatusBar
        style = 'light'
        backgroundColor = '#000'
        transLucent = {true} />
      </View>
    );
  }
}

// Área de estilo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});