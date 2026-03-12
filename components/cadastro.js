import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import styles from "../styles"

export default function Cadastro({ setTela }) {

  const [user, setUser] = useState("")
  const [senha, setSenha] = useState("")

  async function cadastrar() {

    const dados = await AsyncStorage.getItem("usuarios")
    const usuarios = JSON.parse(dados) || []

    usuarios.push({
      user,
      senha
    })

    await AsyncStorage.setItem(
      "usuarios",
      JSON.stringify(usuarios)
    )

    alert("Usuário cadastrado")

    setTela("login")

  }

  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>
        Cadastro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor="#aaa"
        onChangeText={setUser}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={cadastrar}
      >
        <Text style={styles.botaoTexto}>
          Cadastrar
        </Text>
      </TouchableOpacity>

    </View>

  )
}