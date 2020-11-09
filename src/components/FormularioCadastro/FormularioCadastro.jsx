import React, { useState } from "react"
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core"

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState("")
  const [sobrenome, setSobrenome] = useState("")
  const [cpf, setCpf] = useState("")
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)
  const [erros, setErros] = useState({cpf: {valido: true, texto: ""}})

  return (
    <React.StrictMode>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
          // console.log({nome, sobrenome, cpf, promocoes, novidades});
        }}
      >
        <TextField
          value={nome}
          id="nome"
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(event) => {
            // console.log(event.target.value)
            setNome(event.target.value)
          }}
        />
        <TextField
          value={sobrenome}
          id="sobrenome"
          label="Sobrenome"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(event) => {
            // console.log(event.target.value)
            setSobrenome(event.target.value)
          }}
        />
        <TextField
          value={cpf}
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
          onBlur={(e) => {
            const ehValido = validarCPF(e.target.value)
            setErros({cpf: ehValido})
          }}
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
          Cadastrar
        </Button>
      </form>
    </React.StrictMode>
  )
}

export default FormularioCadastro
