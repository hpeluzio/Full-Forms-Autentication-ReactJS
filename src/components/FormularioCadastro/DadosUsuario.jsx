import React, { useState, useContext } from 'react'
import { TextField, Button } from '@material-ui/core'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'

function DadosUsuario({ aoEnviar }) {
  //
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erros, setErros] = useState({ senha: { valido: true, texto: '' } })

  const validacoes = useContext(ValidacoesCadastro)

  function validarCampos(event) {
    const { name, value } = event.target
    // console.log(name, ' - ', value)
    const novoEstado = { ...erros }
    // console.log(novoEstado)
    novoEstado[name] = validacoes[name](value)

    setErros(novoEstado)
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) return false
    }
    return true
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (possoEnviar()) {
          aoEnviar({ email, senha })
        }
      }}
    >
      <TextField
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        id="email"
        label="E-mail"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <TextField
        name="senha"
        value={senha}
        onChange={(e) => {
          setSenha(e.target.value)
          // console.log('senha: ', senha)
        }}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        onBlur={validarCampos}
        id="senha"
        label="Senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  )
}

export default DadosUsuario
