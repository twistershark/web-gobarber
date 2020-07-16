import { ValidationError } from 'yup';

interface Errors {
  /**
   * Quando queremos informar para o typescript que receberemos
   * um número indefinido de parâmetros mas que todos serão strings,
   * podemos usar aquele formato de array, onde key é um nome totalmente
   * arbitrário, poderia ser qualquer outra coisa.
   */
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
