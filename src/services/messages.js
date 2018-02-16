export default {
  required: 'Campo requerido',
  minLength: min => `O minimo é ${min} caracteres`,
  maxLength: max => `O maximo de caracteres permitidos é ${max}`,
  sameAs: 'Senha e confirmar senha devem ser iguais',
  invalidEmail: 'Email inválido',
  alphaNum: 'Precisa conter letras e numeros'
};
