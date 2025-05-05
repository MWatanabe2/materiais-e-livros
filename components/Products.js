// Importação de comandos
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// Função base para os Produtos
export default function Products(props) {
  
  {/* Função para delimitar a quantidade de caracteres que aparece na descrição do produto */}
  function filterDescription (desc){
    if (desc.length < 27) {
      return desc;
    }

    return `${desc.substring(0, 23)}...`;
  }
  
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      {/* Personalização da imagem do produto */}
      <Image
        source = {props.img}
        style = {styles.productsImg}
      />
      {/* Personalização da descrição do produto */}
      <Text style = {styles.productsText}>
        {filterDescription(props.children)}
      </Text>

      {/* Personalização do preço do produto */}
      <View opacity={0.4}>
        <Text style = {styles.productsText}>{props.cost}</Text>
      </View>
    </TouchableOpacity>

  );
}

// Área de estilo
const styles = StyleSheet.create({
  container:{
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productsImg: {
    width: 150,
    height: 150,
  },
  productsText: {
    fontSize: 16,
  }
});