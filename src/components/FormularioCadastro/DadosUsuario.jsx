import React, { useState } from "react"
import { TextField, Button } from "@material-ui/core"

function DadosUsuario() {
  return (
    <form>
      <TextField
        id="email"
        label="E-mail"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        label="Senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  )
}

export default DadosUsuario
