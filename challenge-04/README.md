# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = (a) => {
    return !!a
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(0);
isTruthy(-0);
isTruthy('');
isTruthy(null);
isTruthy(undefined);
isTruthy(false);
isTruthy(NaN);
isTruthy();
/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(10);
isTruthy(-2);
isTruthy('Olá');
isTruthy([]);
isTruthy({});
isTruthy(function() {});
isTruthy('0');
isTruthy('okay');
isTruthy('12346');
isTruthy(12346);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: 'Fiat',
    modelo: 'Uno',
    placa: 'UBC-8976',
    ano: '1997',
    cor: 'Preto',
    quantasPortas: 2,
    assentos: 5,
    quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = (novaCor) => {
    carro.cor = novaCor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => {
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => {
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => {
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () => {
    return 'Esse carro é um ' + carro.marca + ' ' + carro.modelo
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = (novasPessoas) => {
    carro.quantidadePessoas += novasPessoas;
    var sobraAssentos = carro.assentos - carro.quantidadePessoas;
    
    if (carro.quantidadePessoas > 5) {
        carro.quantidadePessoas -= novasPessoas;
        return 'Não cabem tantas pessoas'
    } else if (carro.quantidadePessoas === 5) {
        return 'O carro já está lotado!'
    } else if (carro.quantidadePessoas === 4) {
        return 'Só cabe mais 1 pessoa!'
    }else if (sobraAssentos < carro.assentos || sobraAssentos >= 0) {
        return 'Cabem mais ' + (sobraAssentos) + ' pessoas!'
    } else {
        return 'Valor inválido, digite um número positivo'
    }
    return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!'
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
//'Preto'

// Mude a cor do carro para vermelho.
carro.mudarCor('Cinza');

// E agora, qual a cor do carro?
//'Cinza'

// Mude a cor do carro para verde musgo.
carro.mudarCor('Verde Musgo');

// E agora, qual a cor do carro?
//'Verde musgo'

// Qual a marca e modelo do carro?
//'Esse é um Fiat Uno'

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2);//'Cabem mais 3 pessoas!'

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4);//'Não cabem tantas pessoas'

// Faça o carro encher.
carro.adicionarPessoas(3);//'O carro já está lotado!'

// Tire 4 pessoas do carro.
carro.adicionarPessoas(-4);//'Cabem mais 4 pessoas!'

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10);//'Não cabem tantas pessoas'

// Quantas pessoas temos no carro?
carro.quantidadePessoas;//1
```
