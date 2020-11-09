import React, { useState } from "react"
import {
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Typography,
} from "@material-ui/core"
import DadosPessoais from "./DadosPessoais"
import DadosUsuario from "./DadosUsuario"
import DadosEntrega from "./DadosEntrega"

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(1)

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario />
      case 1:
        return <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
      case 2:
        return <DadosEntrega />
      default:
        return <Typography>Erro</Typography>
    }
  }

  return <>{formularioAtual(etapaAtual)}</>
}

export default FormularioCadastro
