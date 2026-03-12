import { useEffect, useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import styles from "../styles"

export default function Carrinho({ usuario, setTela }) {

  const [carrinho, setCarrinho] = useState([])

  useEffect(() => {
      async function carregarCarrinho() {

    const dados = await AsyncStorage.getItem("carrinho_" + usuario)
    setCarrinho(JSON.parse(dados) || [])

  }
    carregarCarrinho()
  }, [usuario])



  async function remover(index) {

    const novoCarrinho = carrinho.filter((_, i) => i !== index)

    setCarrinho(novoCarrinho)

    await AsyncStorage.setItem(
      "carrinho_" + usuario,
      JSON.stringify(novoCarrinho)
    )
  }

  const total = carrinho.reduce(
    (soma, p) => soma + p.preco * p.quantidade,
    0
  )

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Carrinho</Text>

      {carrinho.map((p, i) => (

        <View key={i} style={styles.itemCarrinho}>

          <Text style={styles.textoCarrinho}>
            {p.nome} x{p.quantidade}
          </Text>

          <Text style={styles.textoCarrinho}>
            R$ {p.preco * p.quantidade}
          </Text>

          <TouchableOpacity
            style={styles.botaoApagar}
            onPress={() => remover(i)}
          >
            <Text style={styles.botaoTexto}>Remover</Text>
          </TouchableOpacity>

        </View>

      ))}

      <Text style={styles.total}>
        Total: R$ {total}
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={async () => {
          await AsyncStorage.removeItem("carrinho_" + usuario)
          setTela("produtos")
        }}
      >
        <Text style={styles.botaoTexto}>
          Finalizar Compra
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setTela("produtos")}
      >
        <Text style={styles.botaoTexto}>
          Voltar
        </Text>
      </TouchableOpacity>

    </View>
  )
}