import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import estilos from '../Estilo';

export default function Detalhes({
  route,
  navigation
}) {

  const { produto } = route.params;

  return (
    <ScrollView
      contentContainerStyle={estilos.containerDetalhes}
      showsVerticalScrollIndicator={false}
    >

      <View style={estilos.iconeDetalhes}>

        <Text style={estilos.emojiDetalhes}>
          {produto.emoji}
        </Text>

      </View>

      <Text style={estilos.tituloDetalhes}>
        {produto.nome}
      </Text>

      <Text style={estilos.precoDetalhes}>
        {produto.preco}
      </Text>

      <View style={estilos.cardDetalhes}>

        <Text style={estilos.tituloInformacao}>
          Sobre o lanche
        </Text>

        <Text style={estilos.textoDetalhes}>
          {produto.descricao}
        </Text>

        <View style={estilos.linha} />

        <Text style={estilos.tituloInformacao}>
          🧾 Ingredientes
        </Text>

        <Text style={estilos.textoDetalhes}>
          {produto.ingredientes}
        </Text>

      </View>

      <View style={estilos.cardAviso}>

        <Text style={estilos.emojiAviso}>
          👨‍🍳
        </Text>

        <View style={estilos.infoAviso}>

          <Text style={estilos.tituloAviso}>
            Preparado na hora
          </Text>

          <Text style={estilos.textoAviso}>
            Seu pedido é preparado após a confirmação.
          </Text>

        </View>

      </View>

      <TouchableOpacity
        style={estilos.botaoPrincipal}
        onPress={() =>
          navigation.navigate('Cardapio')
        }
      >

        <Text style={estilos.textoBotao}>
          ← Escolher outro lanche
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={estilos.botaoSecundario}
        onPress={() =>
          navigation.navigate('Home')
        }
      >

        <Text style={estilos.textoBotaoSecundario}>
          🏠 Voltar ao início
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
}