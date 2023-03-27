//  Método para exportar function de criação
// tudo que estiver aq sera exportado e gerara resultado no arquivo script. 
export default function ehUmCPF(campo) {
// convert todos os caracteres que não forem números em uma string vazia.
    const cpf = campo.value.replace(/\.|-/g, "");
// 
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        campo.setCustomValidity('Esse cpf não é válido')
    }
}

// definição de valores repetidos que devem ser desconsiderados no campo CPF   
function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
// insere valores
    return numerosRepetidos.includes(cpf)
}

// 
function validaPrimeiroDigito(cpf) {
// 
    let soma = 0;
    let multiplicador = 10;

// regra de negocio para identificar o padrão que deve ter um cpf valido.
    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--
    }
// 
    soma = (soma * 10) % 11;
// 
    if (soma == 10 || soma == 11) {
        soma = 0;
    }
// 
    return soma != cpf[9];
}

// 
function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[10];
}