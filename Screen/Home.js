// Importação de comandos e da função de "molde" dos produtos
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Products from '../components/Products'
import {criarTabela} from '../BancoDeDados/CadastroDAO';
import React, {useEffect} from 'react';

// Página Home
export default function Home({ navigation }) {
  
  useEffect(() => {
    criarTabela();
  })
  
  return (

    <View style={styles.container}>
      <ScrollView>
        <View style={styles.menu}>
          {/* Texto principal da página */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.texto}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.texto}>Cadastro</Text>
          </TouchableOpacity>
        </View>


        {/* Materiais em estoque */}      
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Products img={require('../Images/Materiais/canetaazul.webp')} cost="R$ 1,20" onClick={()=>alert('Caneta Esferográfica BIC Azul')}>
            Caneta Esferográfica BIC Azul
          </Products>
          <Products img={require('../Images/Materiais/canetapreta.webp')} cost="R$ 1,20" onClick={()=>alert('Caneta Esferográfica BIC Preta')}>
            Caneta Esferográfica BIC Preta
          </Products>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Products img={require('../Images/Materiais/lapis.jpg')} cost="R$1,80" onClick={()=>alert('Lápis Faber-Castell c/ borracha')}>
            Lápis Faber-Castell c/ borracha
          </Products>
          <Products img={require('../Images/Materiais/borracha.jpg')} cost="R$1,50" onClick={()=>alert('Borracha Prima Azul/Vermelha Mercur')}>
            Borracha Prima Azul/Vermelha Mercur
          </Products>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Products img={require('../Images/Materiais/caderno.webp')} cost="R$12,70" onClick={()=>alert('Caderno Capa Dura 1x1 80 Folhas Preto Tilibra')}>
            Caderno Capa Dura 1x1 80 Folhas Preto Tilibra
          </Products>
          <Products img={require('../Images/Materiais/apontador.jpg')} cost="R$1,59" onClick={()=>alert('Apontador Sem Depósito Simples Faber-Castell')}>
            Apontador Sem Depósito Simples Faber-Castell
          </Products>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Products img={require('../Images/Materiais/estojo.webp')} cost="R$23,06" onClick={()=>alert('Estojo Preto Fechamento em Zíper')}>
            Estojo Preto Fechamento em Zíper
          </Products>
          <Products img={require('../Images/Materiais/regua.webp')} cost="R$10,82" onClick={()=>alert('Régua de Poliestireno 30cm')}>
            Régua de Poliestireno 30cm
          </Products>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Products img={require('../Images/Materiais/tesoura.webp')} cost="R$7,10" onClick={()=>alert('Tesoura de Aço Inox 17cm')}>
            Tesoura de Aço Inox 17cm
          </Products>
          <Products img={require('../Images/Materiais/colabranca.webp')} cost="R$11,99" onClick={()=>alert('Cola Branca Compactor Polar')}>
            Cola Branca Compactor Polar
          </Products>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Products img={require('../Images/Materiais/agendadiaria.webp')} cost="R$59,00" onClick={()=>alert('Agenda Diária Capa Dura Azul')}>
            Agenda Diária Capa Dura Azul
          </Products>
          <Products img={require('../Images/Materiais/lapisdecor.webp')} cost="R$38,90" onClick={()=>alert('Lápis de Cor Faber-Castell')}>
            Lápis de Cor Faber-Castell
          </Products>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Products img={require('../Images/Materiais/lapiseira.webp')} cost="R$18,77" onClick={()=>alert('Lapiseira Sharp P207 Pentel 0.7mm Azul + 2 Refis de Borracha')}>
            Lapiseira Sharp P207 Pentel 0.7mm Azul + 2 Refis de Borracha
          </Products>
          <Products img={require('../Images/Materiais/grafite.webp')} cost="R$19,96" onClick={()=>alert('Grafite 0.7mm 2B 2 Tubos de 24 Cada, Faber-Castell')}>
            Grafite 0.7mm 2B 2 Tubos de 24 Cada, Faber-Castell
          </Products>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Products img={require('../Images/Materiais/corretivo.webp')} cost="R$7,90" onClick={()=>alert('Corretivo Líquido Ecolutions 18ml água Bic')}>
            Corretivo Líquido Ecolutions 18ml água Bic
          </Products>
          <Products img={require('../Images/Materiais/hidrocor.webp')} cost="R$6,76" onClick={()=>alert('Canetinha Hidrográfica Blister com 12 Cores, BRW')}>
            Canetinha Hidrográfica Blister com 12 Cores, BRW
          </Products>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Products img={require('../Images/Materiais/grampeador.webp')} cost="R$23,73" onClick={()=>alert('Grampeador de mesa até 20 folhas Plus Line Cis')}>
            Grampeador de mesa até 20 folhas Plus Line Cis
          </Products>
          <Products img={require('../Images/Materiais/grampo.webp')} cost="R$9,93" onClick={()=>alert('CIS Grampo 179.5402 , Galvanizado, 5000 grampos')}>
            CIS Grampo 179.5402 , Galvanizado, 5000 grampos
          </Products>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Products img={require('../Images/Materiais/mochila.webp')} cost="R$34,00" onClick={()=>alert('Mochila Escolar Básica Casual Preta Resistente à Água')}>
            Mochila Escolar Básica Casual Preta Resistente à Água
          </Products>
          <Products img={require('../Images/Materiais/compasso.webp')} cost="R$12,32" onClick={()=>alert('Compasso Escolar de Metal')}>
            Compasso Escolar de Metal
          </Products>
        </View>


        {/* Livros em estoque */}
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Products img={require('../Images/Livros/arevolucaodosbichos.webp')} cost="R$29,90" onClick={()=>alert('A Revolução dos Bichos - George Orwell')}>
            A Revolução dos Bichos - George Orwell
          </Products>
          <Products img={require('../Images/Livros/1984.webp')} cost="R$39,90" onClick={()=>alert('1984 - George Orwell')}>
            1984 - George Orwell
          </Products>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Products img={require('../Images/Livros/quartodedespejo.webp')} cost="R$80,00" onClick={()=>alert('Quarto de Despejo - Carolina Maria de Jesus')}>
            Quarto de Despejo - Carolina Maria de Jesus
          </Products>
          <Products img={require('../Images/Livros/capitaesdaareia.webp')} cost="R$54,90" onClick={()=>alert('Capitães da Areia - Jorge Amado')}>
            Capitães da Areia - Jorge Amado
          </Products>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Products img={require('../Images/Livros/domcasmurro.webp')} cost="R$24,90" onClick={()=>alert('Dom Casmurro - Machado de Assis')}>
            Dom Casmurro - Machado de Assis
          </Products>
          <Products img={require('../Images/Livros/opequenoprincipe.webp')} cost="R$21,90" onClick={()=>alert('O Pequeno Príncipe - Antoine de Saint-Exupéry')}>
            O Pequeno Príncipe - Antoine de Saint-Exupéry
          </Products>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Products img={require('../Images/Livros/odiariodeannefrank.webp')} cost="R$16,03" onClick={()=>alert('Dom Casmurro - Machado de Assis')}>
            Dom Casmurro - Machado de Assis
          </Products>
          <Products img={require('../Images/Livros/omundodesofia.webp')} cost="R$79,90" onClick={()=>alert('O Mundo de Sofia - Jostein Gaarder')}>
            O Mundo de Sofia - Jostein Gaarder
          </Products>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Products img={require('../Images/Livros/ameninaqueroubavalivros.webp')} cost="R$69,90" onClick={()=>alert('A Menina que Roubava Livros - Markus Zusak')}>
            A Menina que Roubava Livros - Markus Zusak
          </Products>
          <Products img={require('../Images/Livros/omeupedelaranjalima.webp')} cost="R$63,00" onClick={()=>alert('O Meu Pé de Laranja Lima - José Mauro de Vasconcelos')}>
            O Meu Pé de Laranja Lima - José Mauro de Vasconcelos
          </Products>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Products img={require('../Images/Livros/vidassecas.webp')} cost="R$54,90" onClick={()=>alert('Vidas Secas - Graciliano Ramos')}>
            Vidas Secas - Graciliano Ramos
          </Products>
          <Products img={require('../Images/Livros/memoriaspostumasdebrascubas.webp')} cost="R$24,90" onClick={()=>alert('Memórias Póstumas de Brás Cubas - Machado de Assis')}>
            Memórias Póstumas de Brás Cubas - Machado de Assis
          </Products>
        </View>
      </ScrollView>
    </View>
  );
}

// Área de estilo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  texto: {
    fontSize: 26,
    marginHorizontal: '1%',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: '15%',
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    opacity: 0.6,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});