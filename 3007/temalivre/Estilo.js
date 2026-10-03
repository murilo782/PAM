import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  // =========================
  // TELA INICIAL
  // =========================

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#F5F5F5',
  },

  logo: {
    width: 115,
    height: 115,
    backgroundColor: '#FF8C00',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },

  logoEmoji: {
    fontSize: 60,
  },

  titulo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#181818',
    marginBottom: 6,
  },

  subtitulo: {
    fontSize: 17,
    color: '#777777',
    textAlign: 'center',
    marginBottom: 30,
  },

  cardDestaque: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 25,
    alignItems: 'center',
    marginBottom: 25,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 7,
    elevation: 4,
  },

  emojiDestaque: {
    fontSize: 45,
    marginBottom: 12,
  },

  tituloCard: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#181818',
    marginBottom: 8,
  },

  textoCard: {
    fontSize: 16,
    color: '#777777',
    textAlign: 'center',
    lineHeight: 24,
  },

  botaoPrincipal: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#FF8C00',
    paddingVertical: 17,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 4,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  rodape: {
    color: '#999999',
    fontSize: 14,
    marginTop: 25,
  },


  // =========================
  // CARDÁPIO
  // =========================

  containerCardapio: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    padding: 22,
    alignItems: 'center',
  },

  tituloPagina: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#181818',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },

  subtituloPagina: {
    fontSize: 16,
    color: '#777777',
    textAlign: 'center',
    marginBottom: 25,
  },

  areaProdutos: {
    width: '100%',
    maxWidth: 650,
  },

  cardProduto: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 18,
    marginBottom: 14,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.07,
    shadowRadius: 5,
    elevation: 3,
  },

  areaEmojiProduto: {
    width: 65,
    height: 65,
    backgroundColor: '#FFF3E0',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emojiProduto: {
    fontSize: 36,
  },

  infoProduto: {
    flex: 1,
    marginLeft: 15,
  },

  nomeProduto: {
    color: '#181818',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  descricaoProduto: {
    color: '#777777',
    fontSize: 14,
    marginBottom: 6,
  },

  precoProduto: {
    color: '#FF8C00',
    fontSize: 17,
    fontWeight: 'bold',
  },

  seta: {
    color: '#CCCCCC',
    fontSize: 32,
    marginLeft: 10,
  },


  // =========================
  // DETALHES
  // =========================

  containerDetalhes: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#F5F5F5',
  },

  iconeDetalhes: {
    width: 150,
    height: 150,
    backgroundColor: '#FFF3E0',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },

  emojiDetalhes: {
    fontSize: 82,
  },

  tituloDetalhes: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#181818',
    textAlign: 'center',
  },

  precoDetalhes: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8C00',
    marginTop: 6,
    marginBottom: 20,
  },

  cardDetalhes: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 20,
    marginBottom: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  tituloInformacao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#181818',
    marginBottom: 8,
  },

  textoDetalhes: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
  },

  linha: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 20,
  },

  cardAviso: {
    width: '100%',
    maxWidth: 520,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    borderRadius: 17,
    backgroundColor: '#FFF3E0',
    marginBottom: 10,
  },

  emojiAviso: {
    fontSize: 35,
    marginRight: 15,
  },

  infoAviso: {
    flex: 1,
  },

  tituloAviso: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181818',
    marginBottom: 3,
  },

  textoAviso: {
    fontSize: 14,
    color: '#777777',
  },


  // =========================
  // BOTÃO SECUNDÁRIO
  // =========================

  botaoSecundario: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 15,
  },

  textoBotaoSecundario: {
    color: '#181818',
    fontSize: 16,
    fontWeight: 'bold',
  },

});