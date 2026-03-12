import { useState } from "react"

import Login from "./components/login"
import Cadastro from "./components/cadastro"
import Produtos from "./components/produtos"
import Carrinho from "./components/carrinho"
import Admin from "./components/admin"

export default function App() {

  const [tela, setTela] = useState("login")
  const [usuario, setUsuario] = useState(null)

  if (tela === "login") {
    return <Login setTela={setTela} setUsuario={setUsuario} />
  }

  if (tela === "cadastro") {
    return <Cadastro setTela={setTela} />
  }

  if (tela === "produtos") {
    return <Produtos usuario={usuario} setTela={setTela} />
  }

  if (tela === "carrinho") {
    return <Carrinho usuario={usuario} setTela={setTela} />
  }

  if (tela === "admin") {
    return <Admin setTela={setTela} />
  }
}