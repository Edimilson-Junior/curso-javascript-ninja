/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Campeonato Baiano';

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [ 'Jacuipense', 'Atlético (BA)', 'Bahia de Feira', 'Barcelona (BA)', 'EC Vitória' ];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(posicao) {
    if( posicao >= 1 && posicao <= 5 ) {
        console.log( 'O time que está em ' + posicao + 'º lugar é o ' + teams[ posicao - 1 ] + '.' );
    } else {
        console.log( 'Não temos a informação do time que está nessa posição.');
    }
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(2);//'O time que está em 2º lugar é o Atlético (BA).'
showTeamPosition(3);//'O time que está em 3º lugar é o Bahia de Feira.'
showTeamPosition(1);//'O time que está em 1º lugar é o Jacuipense.'
showTeamPosition(4);//'O time que está em 4º lugar é o Barcelona (BA).'
showTeamPosition(9);//'Não temos a informação do time que está nessa posição.'


/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var i = 20;

while( i >= 20 && i <= 30 ) {
    console.log( i );
    i++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor) {
    var red = '#FF0000', blue = '#0000FF', magenta = '#FF00FF', yellow = '#FFFF00', green = '#00FF00';

    switch( cor ) {
        case 'red': 
            console.log( 'O hexadecimal para a cor ' + cor + ' é ' + red + '.' );
            break;
        case 'blue':
            console.log( 'O hexadecimal para a cor ' + cor + ' é ' + blue + '.' );
            break;
        case 'magenta':
            console.log( 'O hexadecimal para a cor ' + cor + ' é ' + magenta + '.' );
            break;
        case 'yellow':
            console.log( 'O hexadecimal para a cor ' + cor + ' é ' + yellow + '.' );
            break;
        case 'green':
            console.log( 'O hexadecimal para a cor ' + cor + ' é ' + green + '.' );
            break;
        default: console.log( 'Não temos o equivalente hexadecimal para ' + cor + '.' );
    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('blue');
convertToHex('red');
convertToHex('magenta');
convertToHex('yellow');
convertToHex('green');
convertToHex('purple');
convertToHex('gray');
convertToHex('brown');