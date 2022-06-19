# Desafio da semana #3

```js
// Declarar uma variável qualquer, que receba um objeto vazio.
var myVar;

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var pessoa = { 
        nome: 'Edimilson',
        sobrenome: 'Santos Pereira Júnior',
        sexo: 'Masculino',
        idade: 20,
        altura: 1.80,
        peso: 140,
        andando: false,
        caminhouQuanto: 0
    }

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = () => {
    return pessoa.idade ++ quantosAiversarios;
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = (metrosCaminhados) => {
    pessoa.andando = true;
    pessoa.caminhouQuanto += metrosCaminhados;
    return 'A pessoa andou ' + metrosCaminhados + ' metros.'
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = () => {
    pessoa.andando = false;
    return 'A pessoa parou de andar.'
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = () => {
    return 'Olá! Meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome + '!'
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Eu tenho [IDADE] anos de idade!"
*/
pessoa.mostrarIdade = () => {
    return 'Eu tenho ' + pessoa.idade + ' anos de idade!'
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = () => {
    return 'Eu peso ' + pessoa.peso + 'Kg.'
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é de [ALTURA]m."
*/
pessoa.mostrarAltura = () => {
    return 'Minha altura é de ' + pessoa.altura + 'm'
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.nomeCompleto()//'Olá! Meu nome é Edimilson Santos Pereira Júnior'

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarIdade()//'Eu tenho 20 anos de idade!'

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarPeso()//'Eu peso 140Kg.'

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarAltura()//Minha altura é de 1.80m'

/*
Faça a `pessoa` fazer 3 aniversários.
*/
for(var i = 0; i <= 2; i++) {
    pessoa.fazerAniversario();
}

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
//23

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(200)
pessoa.andar(250)
pessoa.andar(100)

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.andando()//true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.parar()

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.andando()//false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.caminhouQuanto//550

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
pessoa.nomeCompleto = () => {
    return pessoa.nome + ' ' + pessoa.sobrenome
}
pessoa.apresentacao = () => {
    var pronome;
    var idadeSoP;
    var metrosSoP;

    if (pessoa.sexo === 'Feminino') {
        pronome = 'a';
    } else if (pessoa.sexo === 'Masculino') {
        pronome = 'o'
    } else if (pessoa.sexo !== 'Feminino' || pessoa.sexo !== 'Masculino') {
        return 'Sexo inválido, revisar!'
    }

    if (pessoa.idade > 1) {
        idadeSoP = 'anos'
    } else if (pessoa.idade === 1) {
        idadeSoP = 'ano'
    } else {
        return 'Idade inválida, revisar!'
    }

    if (pessoa.caminhouQuanto > 1) {
        metrosSoP = 'metros'
    } else if (pessoa.caminhouQuanto === 1) {
        metrosSoP = 'metro'
    } else {
        return 'Distância inválida, revisar!'
    }

    return "Olá, eu sou " + pronome + " " + pessoa.nomeCompleto() + ", tenho " + pessoa.idade + " " + idadeSoP + ", tenho " + pessoa.altura + "m de altura, meu peso é " + pessoa.peso + "Kg e, só hoje, eu já caminhei " + pessoa.caminhouQuanto + " " + metrosSoP + "!"
}

// Agora, apresente-se ;)
pessoa.apresentacao() //'Olá, eu sou o Edimilson Santos Pereira Júnior, tenho 23 anos, tenho 1.8m de altura, meu peso é 140Kg e, só hoje, eu já caminhei 550 metros!'
```
