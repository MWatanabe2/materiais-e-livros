{/* Importação das páginas da aplicação */}
import Home from '../Screen/Home';
import Cadastro from '../Screen/Cadastro';

{/* Importação do tipo de navegação */}
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

{/* Função de Navegação entre Abas */}
export default function MenuAbas(){
  const Tab = createBottomTabNavigator();

  return(
  <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Carrinho' component={Carrinho} />
          <Tab.Screen name='Cadastro' component={Cadastro} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}