import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import estilos from '../Estilo';

export default function Home({ navigation }) {

  return (
    <View style={estilos.container}>

      <View style={estilos.logo}>
        <Text style={estilos.logoEmoji}>
          🍔
        </Text>
      </View>

      <Text style={estilos.titulo}>
        FoodSpot
      </Text>

      <Text style={estilos.subtitulo}>
        Seu lanche favorito está aqui!
      </Text>

      <View style={estilos.cardDestaque}>

        <Text style={estilos.emojiDestaque}>
          🍔 🍟 🥤
        </Text>

        <Text style={estilos.tituloCard}>
          Está com fome?
        </Text>

        <Text style={estilos.textoCard}>
          Confira nosso cardápio e descubra vários lanches deliciosos.
        </Text>

      </View>

      <TouchableOpacity
        style={estilos.botaoPrincipal}
        onPress={() =>
          navigation.navigate('Cardapio')
        }
      >

        <Text style={estilos.textoBotao}>
          Ver Cardápio
        </Text>

      </TouchableOpacity>

      <Text style={estilos.rodape}>
        🍴 Escolha, confira e aproveite.
      </Text>

    </View>
  );
}