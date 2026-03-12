import { StyleSheet } from "react-native";

export default StyleSheet.create({

container:{
  flex:1,
  backgroundColor:"#0f172a",
  justifyContent:"top",
  padding:20
},

titulo:{
  fontSize:32,
  color:"#ffffff",
  fontWeight:"bold",
  marginBottom:30,
  textAlign:"center"
},

input:{
  backgroundColor:"#1e293b",
  color:"#ffffff",
  padding:12,
  borderRadius:8,
  marginBottom:12
},

botao:{
  backgroundColor:"#3b82f6",
  padding:14,
  borderRadius:8,
  alignItems:"center",
  marginTop:10
},

botaoTexto:{
  color:"#ffffff",
  fontSize:16,
  fontWeight:"bold"
},

link:{
  color:"#60a5fa",
  marginTop:15,
  textAlign:"center"
},


cardProduto:{
  backgroundColor:"#1e293b",
  padding:15,
  borderRadius:12,
  marginBottom:15
},

imagemProduto:{
  width:"100%",
  height:180,
  borderRadius:10,
  marginBottom:10
},

nomeProduto:{
  color:"#ffffff",
  fontSize:18,
  fontWeight:"bold"
},

descricaoProduto:{
  color:"#cbd5f5",
  marginTop:4
},

precoProduto:{
  color:"#38bdf8",
  fontSize:16,
  fontWeight:"bold",
  marginTop:6
},

quantidadeInput:{
  backgroundColor:"#334155",
  color:"#ffffff",
  padding:10,
  borderRadius:8,
  marginTop:8,
  marginBottom:10,
  width:100
},


itemCarrinho:{
  backgroundColor:"#1e293b",
  padding:12,
  borderRadius:10,
  marginBottom:10
},

textoCarrinho:{
  color:"#ffffff",
  fontSize:16
},

total:{
  color:"#22c55e",
  fontSize:20,
  fontWeight:"bold",
  marginTop:15,
  textAlign:"center"
},

produtoAdmin:{
  backgroundColor:"#1e293b",
  padding:12,
  borderRadius:10,
  marginTop:10
},

botaoApagar:{
  backgroundColor:"#ef4444",
  padding:10,
  borderRadius:8,
  alignItems:"center",
  marginTop:5
}

})