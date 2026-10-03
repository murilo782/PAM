import {
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import estilos from '../Estilo';

export default function Cardapio({ navigation }) {

  const produtos = [

    {
      id: 1,
      nome: 'X-Bacon',
      emoji: '🍔',
      descricao: 'Hambúrguer, bacon, queijo e molho especial.',
      preco: 'R$ 28,90',
      ingredientes:
        'Pão, hambúrguer artesanal, bacon, queijo, alface, tomate e molho especial.'
    },

    {
      id: 2,
      nome: 'Pizza',
      emoji: '🍕',
      descricao: 'Pizza de calabresa com bastante queijo.',
      preco: 'R$ 39,90',
      ingredientes:
        'Massa artesanal, molho de tomate, mussarela, calabresa, cebola e orégano.'
    },

    {
      id: 3,
      nome: 'Hot Dog',
      emoji: '🌭',
      descricao: 'Cachorro-quente completo.',
      preco: 'R$ 19,90',
      ingredientes:
        'Pão, salsicha, molho, milho, ervilha, queijo e batata palha.'
    },

    {
      id: 4,
      nome: 'X-Salada',
      emoji: '🥪',
      descricao: 'Hambúrguer com queijo e salada.',
      preco: 'R$ 24,90',
      ingredientes:
        'Pão, hambúrguer, queijo, alface, tomate, cebola e molho.'
    },

    {
      id: 5,
      nome: 'Batata Frita',
      emoji: '🍟',
      descricao: 'Batata frita crocante.',
      preco: 'R$ 17,90',
      ingredientes:
        'Batatas fritas crocantes temperadas com sal.'
    },

    {
      id: 6,
      nome: 'Combo FoodSpot',
      emoji: '🍔',
      descricao: 'Hambúrguer, batata e refrigerante.',
      preco: 'R$ 42,90',
      ingredientes:
        'X-Bacon, porção de batata frita e refrigerante.'
    },

    {
      id: 7,
      nome: 'Refrigerante',
      emoji: '🥤',
      descricao: 'Refrigerante gelado.',
      preco: 'R$ 7,00',
      ingredientes:
        'Refrigerante de 350ml.'
    },

    {
      id: 8,
      nome: 'Milk Shake',
      emoji: '🥛',
      descricao: 'Milk shake cremoso de chocolate.',
      preco: 'R$ 18,90',
      ingredientes:
        'Sorvete, leite, chocolate e cobertura.'
    },

  ];

  return (
    <ScrollView
      contentContainerStyle={estilos.containerCardapio}
      showsVerticalScrollIndicator={false}
    >

      <Text style={estilos.tituloPagina}>
        Nosso Cardápio
      </Text>

      <Text style={estilos.subtituloPagina}>
        Escolha uma opção para ver os detalhes.
      </Text>

      <View style={estilos.areaProdutos}>

        {produtos.map((produto) => (

          <TouchableOpacity
            key={produto.id}
            style={estilos.cardProduto}
            onPress={() =>
              navigation.navigate(
                'Detalhes',
                {
                  produto: produto
                }
              )
            }
          >

            <View style={estilos.areaEmojiProduto}>

              <Text style={estilos.emojiProduto}>
                {produto.emoji}
              </Text>

            </View>

            <View style={estilos.infoProduto}>

              <Text style={estilos.nomeProduto}>
                {produto.nome}
              </Text>

              <Text style={estilos.descricaoProduto}>
                {produto.descricao}
              </Text>

              <Text style={estilos.precoProduto}>
                {produto.preco}
              </Text>

            </View>

            <Text style={estilos.seta}>
              ›
            </Text>

          </TouchableOpacity>

        ))}

      </View>

      <TouchableOpacity
        style={estilos.botaoSecundario}
        onPress={() =>
          navigation.navigate('Home')
        }
      >

        <Text style={estilos.textoBotaoSecundario}>
          Voltar para o início
        </Text>

      </TouchableOpacity>

    </ScrollView>
  );
}