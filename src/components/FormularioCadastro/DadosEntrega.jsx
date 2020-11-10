import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState('')
  const [numero, setNumero] = useState('')
  const [estado, setEstado] = useState('')
  const [cidade, setCidade] = useState('')

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        aoEnviar({ cep, endereco, numero, estado, cidade })
        // console.log({nome, sobrenome, cpf, promocoes, novidades});
      }}
    >
      <TextField
        value={endereco}
        id="endereco"
        label="Endereço"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        onChange={(event) => {
          // console.log(event.target.value)
          setEndereco(event.target.value)
        }}
      />
      <TextField
        value={numero}
        id="numero"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
        required
        onChange={(event) => {
          // console.log(event.target.value)
          setNumero(event.target.value)
        }}
      />
      <TextField
        value={cep}
        id="cep"
        label="CEP"
        variant="outlined"
        margin="normal"
        required
        onChange={(event) => {
          // console.log(event.target.value)
          setCep(event.target.value)
        }}
      />
      <TextField
        value={estado}
        id="estado"
        label="Estado"
        // type="number"
        variant="outlined"
        margin="normal"
        required
        onChange={(event) => {
          // console.log(event.target.value)
          setEstado(event.target.value)
        }}
      />
      <TextField
        value={cidade}
        id="cidade"
        label="Cidade"
        // type="number"
        variant="outlined"
        margin="normal"
        required
        onChange={(event) => {
          // console.log(event.target.value)
          setCidade(event.target.value)
        }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar cadastro
      </Button>
    </form>
  )
}

export default DadosEntrega
