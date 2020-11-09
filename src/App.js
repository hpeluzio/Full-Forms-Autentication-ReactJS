import React from "react"
import "./App.css"
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro"
import { Container, Typography } from "@material-ui/core"
import "fontsource-roboto"

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulario Cadastro
      </Typography>
      <FormularioCadastro
        aoEnviar={(dados) => {
          console.log("dados: ", dados)
        }}
        validarCPF={validarCPF}
      />
    </Container>
  )
}

function validarCPF(cpf) {
  if (cpf.length !== 11)
    return {valido: false, texto: "CPF deve ter 11 dígitos."}
  else
    return {valido: true, texto: ""}
}




export default App
