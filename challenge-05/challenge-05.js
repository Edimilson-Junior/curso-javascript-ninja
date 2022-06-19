/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [ 1, 2, 3, 4, 5 ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arrFunc(arrVar) {
    return arrVar = myVar;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( arrFunc()[1] );//2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrFunc2(arrVar, numVar) {
    arrVar = myVar;
    numVar = 4;

    return arrVar[numVar];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrays = [ 3, 'Olá a todos', true, { nome: 'Edimilson', idade: 20, sexo: 'Masculino' }, function funcQualquer(soma) { soma = myVar[4] + 4; } ];

/*
Crie uma função, fazendo-a retornar todos os valores do último
array criado.
*/
function arrFunc3() {
    return arrays;
}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
    var allBooks = {
        'As Cronicas De Gelo e Fogo': {
            quantidadePaginas: 600,
            autor: 'George R. R. Martin',
            editora: 'Suma'
        },
        'Harry Potter e a Pedra Filosofal': {
            quantidadePaginas: 254,
            autor: 'J.K. Rowling',
            editora: 'Pottermore Publishing'
        },
        'Jogos Vorazes': {
            quantidadePaginas: 400,
            autor: 'Suzanne Collins',
            editora: 'Rocco'
        }
    };

    return !bookName ? allBooks : allBooks [ bookName ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );/*
{
  'As Cronicas De Gelo e Fogo': {
    quantidadePaginas: 600,
    autor: 'George R. R. Martin',
    editora: 'Suma'
  },
  'Harry Potter e a Pedra Filosofal': {
    quantidadePaginas: 254,
    autor: 'J.K. Rowling',
    editora: 'Pottermore Publishing'
  },
  'Jogos Vorazes': {
    quantidadePaginas: 400,
    autor: 'Suzanne Collins',
    editora: 'Rocco'
  }
}
*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O livro Jogos Vorazes tem ' + book( 'Jogos Vorazes' ).quantidadePaginas + ' páginas!')//'O livro Jogos Vorazes tem 400 páginas!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro Jogos Vorazes é ' + book( 'Jogos Vorazes' ).autor + '.' );//'O autor do livro Jogos Vorazes é Suzanne Collins.'

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro Jogos Vorazes foi publicado pela editora ' + book( 'Jogos Vorazes' ).editora + '.' );//'O livro Jogos Vorazes foi publicado pela editora Rocco.'
