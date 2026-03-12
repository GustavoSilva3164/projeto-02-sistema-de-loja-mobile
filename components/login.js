import { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import styles from "../styles"

export default function Login({ setTela, setUsuario }) {

  const [user, setUser] = useState("")
  const [senha, setSenha] = useState("")

  async function entrar() {

    if (user === "admin" && senha === "1234") {
      setTela("admin")
      return
    }

    const dados = await AsyncStorage.getItem("usuarios")
    const usuarios = JSON.parse(dados) || []

    const encontrado = usuarios.find(
      u => u.user === user && u.senha === senha
    )

    if (encontrado) {
      setUsuario(user)
      setTela("produtos")
    } else {
      alert("Login inválido")
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Login</Text>

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
        secureTextEntry
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.botao} onPress={entrar}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.link} onPress={() => setTela("cadastro")}>
        Criar conta
      </Text>

    </View>
  )
}