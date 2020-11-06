
/* Crie uma função que dado o objeto a seguir:

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

Retorne o seguinte conteúdo:
O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293. */

var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

var buildInfos = (endereco) => {
    return `O usuário mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua} com nº ${endereco.numero}`;
}

console.log('Exercises 1')
console.log(buildInfos(endereco))


/*
    Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
    function pares(x, y) {
         // código aqui
    }
    pares(32, 321);
*/


var getPares = (x, y) => {
    let lista = []
    for (let index = x; index < y; index++) {
        index % 2 === 0 ? lista.push(index) : null
    }
    return lista
}

console.log('Exercises 2')
console.log(getPares(1, 10))