function validarCPF(cpf) {
  if (cpf.length !== 11)
    return { valido: false, texto: 'CPF deve ter 11 dígitos.' }
  else return { valido: true, texto: '' }
}

function validarSenha(senha) {
  if (senha.length < 4)
    return { valido: false, texto: 'Senha deve ter pelo menos 4 dígitos.' }
  else if (senha.length > 72)
    return { valido: false, texto: 'Senha deve ter no máximo 72 dígitos.' }
  return { valido: true, texto: '' }
}

function validarNome(nome) {
  if (nome.length < 3)
    return { valido: false, texto: 'Nome deve ter pelo menos 3 caracteres.' }
  return { valido: true, texto: '' }
}

export { validarCPF, validarSenha, validarNome }
