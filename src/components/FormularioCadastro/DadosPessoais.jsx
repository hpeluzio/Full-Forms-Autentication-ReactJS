import React, { useState, useContext } from 'react'
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'
import useErros from '../../hooks/useErros'

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [cpf, setCpf] = useState('')
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)
  console.log('erros:', erros)

  return (
    <React.StrictMode>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          if (possoEnviar())
            aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
          // console.log({nome, sobrenome, cpf, promocoes, novidades});
        }}
      >
        <TextField
          name="nome"
          value={nome}
          id="nome"
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          onChange={(event) => {
            // console.log(event.target.value)
            setNome(event.target.value)
          }}
          onBlur={validarCampos}
          error={!erros.nome.valido}
          helperText={erros.nome.texto}
        />
        <TextField
          value={sobrenome}
          id="sobrenome"
          label="Sobrenome"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          onChange={(event) => {
            // console.log(event.target.value)
            setSobrenome(event.target.value)
          }}
        />
        <TextField
          name="cpf"
          value={cpf}
          type="number"
          id="cpf"
          label="CPF"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(event) => {
            // console.log(event.target.value)
            setCpf(event.target.value)
          }}
          error={!erros.cpf.valido}
          helperText={erros.cpf.texto}
          onBlur={validarCampos}
          required
        />
        <FormControlLabel
          label="Promoções"
          control={
            <Switch
              checked={promocoes}
              name="promoçoes"
              onChange={(event) => {
                setPromocoes(event.target.checked)
              }}
              color="primary"
            />
          }
        />

        <FormControlLabel
          label="Novidades"
          control={
            <Switch
              checked={novidades}
              name="novidades"
              onChange={(event) => {
                setNovidades(event.target.checked)
              }}
              color="primary"
            />
          }
        />

        <Button variant="contained" color="primary" type="submit">
          Próximo
        </Button>
      </form>
    </React.StrictMode>
  )
}

export default DadosPessoais
