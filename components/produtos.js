import { useEffect, useState } from "react"
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native"

import AsyncStorage from "@react-native-async-storage/async-storage"
import styles from "../styles"

export default function Produtos({ usuario, setTela }) {

  const [produtos, setProdutos] = useState([])
  const [quantidades, setQuantidades] = useState({})

  useEffect(() => {
    carregarProdutos()
  }, [])

  async function carregarProdutos() {

    const dados = await AsyncStorage.getItem("produtos")
    setProdutos(JSON.parse(dados) || [])

  }

  async function adicionarCarrinho(produto) {

    const qtd = quantidades[produto.nome] || 1

    const dados = await AsyncStorage.getItem("carrinho_" + usuario)
    const carrinho = JSON.parse(dados) || []

    carrinho.push({
      ...produto,
      quantidade: qtd
    })

    await AsyncStorage.setItem(
      "carrinho_" + usuario,
      JSON.stringify(carrinho)
    )

    alert("Produto adicionado")

  }

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>
        Produtos
      </Text>

      {produtos.map((p, i) => (

        <View key={i} style={styles.cardProduto}>

          <Image
            source={{ uri: p.imagem }}
            style={styles.imagemProduto}
          />

          <Text style={styles.nomeProduto}>
            {p.nome}
          </Text>

          <Text style={styles.descricaoProduto}>
            {p.descricao}
          </Text>

          <Text style={styles.precoProduto}>
            R$ {p.preco}
          </Text>

          <TextInput
            style={styles.quantidadeInput}
            placeholder="Quantidade"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            onChangeText={q =>
              setQuantidades({
                ...quantidades,
                [p.nome]: Number(q)
              })
            }
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={() => adicionarCarrinho(p)}
          >
            <Text style={styles.botaoTexto}>
              Adicionar ao Carrinho
            </Text>
          </TouchableOpacity>

        </View>

      ))}

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setTela("carrinho")}
      >
        <Text style={styles.botaoTexto}>
          Ver Carrinho
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setTela("login")}
      >
        <Text style={styles.botaoTexto}>
          Logout
        </Text>
      </TouchableOpacity>

    </ScrollView>

  )
}