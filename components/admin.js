import { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import styles from "../styles"

export default function Admin({ setTela }) {

  const [nome, setNome] = useState("")
  const [descricao, setDescricao] = useState("")
  const [preco, setPreco] = useState("")
  const [imagem, setImagem] = useState("")
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    carregar()
  }, [])

  async function carregar() {

    const dados = await AsyncStorage.getItem("produtos")
    setProdutos(JSON.parse(dados) || [])

  }

  async function salvar() {

    const lista = [
      ...produtos,
      {
        nome,
        descricao,
        preco: Number(preco),
        imagem
      }
    ]

    await AsyncStorage.setItem("produtos", JSON.stringify(lista))

    setProdutos(lista)

    setNome("")
    setDescricao("")
    setPreco("")
    setImagem("")

  }

  async function apagar(index) {

    const lista = produtos.filter((_, i) => i !== index)

    await AsyncStorage.setItem("produtos", JSON.stringify(lista))

    setProdutos(lista)

  }

  return (

    <ScrollView style={styles.container}>

      <Text style={styles.titulo}>Admin</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#aaa"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        placeholderTextColor="#aaa"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço"
        placeholderTextColor="#aaa"
        value={preco}
        onChangeText={setPreco}
      />

      <TextInput
        style={styles.input}
        placeholder="URL da imagem"
        placeholderTextColor="#aaa"
        value={imagem}
        onChangeText={setImagem}
      />

      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.botaoTexto}>Adicionar Produto</Text>
      </TouchableOpacity>

      {produtos.map((p, i) => (

        <View key={i} style={styles.cardProduto}>

          <Image
            source={{ uri: p.imagem }}
            style={styles.imagemProduto}
          />

          <Text style={styles.nomeProduto}>
            {p.nome}
          </Text>

          <TouchableOpacity
            style={styles.botaoApagar}
            onPress={() => apagar(i)}
          >
            <Text style={styles.botaoTexto}>
              Apagar
            </Text>
          </TouchableOpacity>

        </View>

      ))}

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