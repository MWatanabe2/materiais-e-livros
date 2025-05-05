import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screen/Home';
import ListaClientes from '../Screen/ListaClientes';
import Cadastro from '../Screen/Cadastro';

const Stack = createStackNavigator();

export default function MenuLink(){
  return(
  <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Carrinho' component={Carrinho} />
          <Stack.Screen name='Cadastro' component={Cadastro} />
          <Stack.Screen name='ListaClientes' component={ListaClientes} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}