import React from 'react'
import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'
import { validarCPF, validarSenha, validarNome } from './models/cadastro.js'
import ValidacoesCadastro from './contexts/ValidacoesCadastro'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulario Cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCPF, senha: validarSenha, nome: validarNome }}
      >
        <FormularioCadastro aoEnviar={aoEnviar} />
      </ValidacoesCadastro.Provider>
    </Container>
  )
}

function aoEnviar(dados) {
  console.log('FORMULARIO CADASTRADO COM SUCESSO!: ', dados)
}

export default App
