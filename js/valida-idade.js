  // Método para exportar function de criação
export default function ehMaiorDeIdade(campo) {
  //Variável que recebe a data atual inserida pelo usuário.
  const dataNascimento = new Date(campo.value);
  //condicional de negação
  if (!validaIdade(dataNascimento)) {
    campo.setCustomValidity("O usuário não é maior de idade");
  }
}

function validaIdade(data) {
  // Variável que
  const dataAtual = new Date();
  //
  const dataMais18 = new Date(
    // Ordem da data recebido pelo JS.
    // soma 18 anos ao ano atual.
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  );
  //comparação entre dataAtual e dataMais18
  return dataAtual >= dataMais18;
}
