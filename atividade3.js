// Questões para tipos String
// Questão 1
const nome = "Giselle Jacinto";
console.log("String:\n\nNome: " + nome);

// Questão 2
const frase = "Humildade sempre";
console.log("Frase: " +frase)

// Questão 3
const palavra = "Catábase";
console.log("Palavra: " + palavra);

// Questão 4
const fraseNova = "A minha força é a minha esperança em dias mais tranquilos)"
console.log(fraseNova.toUpperCase());

// Questão 5
let endereco = "Rua do Velho Guarda";
console.log("Antiga rua: " + endereco);
endereco = "Rua do Novo Guarda";
console.log("Nova rua: " + endereco);

//Questões para tipos Integer e Float
// Questão 1
const PI = 3.14159

// Questão 2
const y = PI

// Questão 3
const taxaJuros = 0.05

// Questão 4
const x = 5, z = 7

// Questão 5
console.log("\nInteger e Double:\n\nsoma = " + (x+z))

// Questão 6
console.log("subtração = " + (x-z))

// Questão 7
console.log("multiplicação = " + (x*z))

// Questão 8
console.log("divisão = " + (x/z).toFixed(3))

//Questões para tipos Booleanos
// Questão 1
const estaChovendo = false

// Questão 2
const verdadeiro = true

// Questão 3
const falso = false

// Questão 4
console.log("\nBoolean:\nO verdadeiro é igual ao falso? R: " + (verdadeiro == falso))

// Questão 5
function ambiente(temperatura){
    if(temperatura > 30){
         return "A temperatura é maior que 30ºC"
    }
    return "A temperatura é menor que 30ºC"
}
console.log(ambiente(20))

// Questão 6
const resultado = 10>5
console.log("resultado = "+resultado)

// Questão 7
const teste = 25<15
console.log("teste = " + teste)

//Questões para tipos Objeto
// Questão 1
let pessoa = {nome: "Matheus", idade: 63, endereco: "Rua do Grande Hamna"}

// Questão 2
console.log("\nObjeto:\nnome da pessoa: " + pessoa.nome)

// Questão 3
pessoa.profissao = "construtor"
console.log(pessoa)

// Questão 4
pessoa.idade = 57
console.log("Idade da pessoa: " + pessoa.idade)

// Questão 5
const animal = {nome: "Dragão-de-komodo", especie: "Répteis", cor: "Marrom"}

// Questão 6
const livro = {titulo: "Do mil ao milhão", autor: "Thiago Nigro", ano: 2018}

// Questão 7
console.log("Do mil ao milhão: " + livro.autor)

// Questão 8
livro.ano = 1966
console.log("Ano de premissão do livro Duna: " + livro.ano)

// Questão 9
delete(livro.titulo) // Deleta qualquer variável
console.log(livro)

// Questão 10
const carro = {marca: "Chevrolet", modelo: "ONIX Plus", ano: 2021 }
console.log(carro)

// Questão 11
carro.modelo = undefined
console.log(carro)
// Questões para outros tipos de variáveis
// Questão 1
const variavelNull = null

// Questão 2
let variavelUndefined

// Questão 3
console.log("\nOutros tipos de variáveis:\nvariavelNull = " + variavelNull)

// Questão 4
console.log("variavelUndefined = " + variavelUndefined)

// Questão 5
const objeto = {}
objeto.nome = undefined
console.log(objeto)

// Questões para Arrays
// Questão 1
const numeros = []

// Questão 2
numeros.push(1,2,3,4)

// Questão 3
console.log("\nArrays:\nValor na posição 2: "+numeros[1])

// Questão 4
numeros[2] = 10
console.log(numeros)

// Questão 5
numeros.pop()
console.log(numeros)

// Questão 6
console.log("Tamanho do Array: " + numeros.length)

// Questão 7
const frutas = ["maça","banana","laranja"]

// Questão 8
console.log("Primeiro elemento das frutas: " + frutas[0])

// Questão 9
frutas.push("uva")
console.log(frutas)

// Questão 10
const aluno = {nome: "Rodrigo", idade: 17}
const alunos = [aluno]

// Questão 11
console.log(alunos[0].nome)

// Questão 12
alunos.push({nome: "Vicente", idade: 15}, {nome: "Jesus", idade: 19}, {nome: "Valdir", idade: 20})

// Questão 13
const produtos = ["manteiga","chocolate","mangas","cenouras","leite","batatas","pratos","jogos","aneis","colares"]
for(let i = 0; i<produtos.length; i++){
    if(i%2 == 0){console.log(produtos[i])}
}

//Questões para Typeof
// Questão 1
const numero = 5
console.log("\nTypeof:\nnumero = " + typeof(numero))

// Questão 2
const texto = "É, isso tem texto"
console.log("texto = "+typeof(texto))

// Questão 3
const bool = true
console.log("bool = " + typeof(bool))

// Questão 4
const array = []
console.log("array = " + typeof(array))

// Questão 5
const Objeto = {}
console.log("Objeto = " + typeof(Objeto))

// Questão 6
const nulo = null
console.log("nulo = " + typeof(nulo))

// Questão 7
const indefinido = undefined
console.log("indefinido = " + typeof(indefinido))

//Questões para Operadores Lógicos
// Questão 1
const igualdade = (x,y) => x==y? true: false
console.log("\nOperadores Lógicos\n igualdade: " + igualdade(5,5))

// Questão 2
const diferenca = (x,y) => x!=y? true:false
console.log("diferença: " + diferenca(5,5))

// Questão 3 - testando lambda nos comparativos de valores
const maior = (x,y) => x>y? true:false
console.log("maior que: " + maior(4,7))

// Questão 4
const menor = (x,y) => x<y?true:false
console.log("menor que: " + menor(4,7))

// Questão 5
const maiorIgual = (x,y) => x>=y?true: false
console.log("maior ou igual que: " + maiorIgual(9,6))

// Questão 6
const menorIgual = (x,y) => x<=y? true:false
console.log("menor ou igual que: " + menorIgual(9,6))

// Questão 7
function AND(x,y){
    if(typeof(x) == "boolean" && typeof(y) == "boolean"){
        return x&&y
    }
    return false
}
console.log("condição AND: " + AND(true,false))

// Questão 8
function OR(x,y){
    if(typeof(x) == "boolean" || typeof(y) == "boolean"){
        return x||y
    }
    return false
}
console.log("condição OR: " + OR(true,false))

// Questão 9
const NOT = x => {if(typeof(x) == "boolean"){return !x} else{ return "não é booleano"}}
console.log("condição NOT: " + NOT(true))

// Questão 10
function entre(x,y){
    if(x>=0 && x<=y){ return x + " é um valor positivo menor do que " + y}
    return x + " é um valor negativo ou é maior que " + y
}
console.log("Entre: " + entre(5,15))

// Questão 11
function foraDoLimite(x,y,z){
    if(z<x || y>z){ return z + " não é um valor entre " + x + " e " + y}
    return z + " é um valor entre " + x + " e " + y
}
console.log("Fora do limite: " + foraDoLimite(5,20,-4))

// Questão 12
function positivo(x){
    if(x>=0){ return x + " é um valor positivo"}
    return x + " não é um valor positivo"
}
console.log("Valores positivos: " + positivo(-9))

// Questão 13
function textoVazio(x){
    if(typeof(x) == "string"){
        if(x.length == 0){return " o texto está vázio"}
        return "o texto não está vázio"
    }
}
console.log("String vazia: " + textoVazio("não está vázio"))

// Questão 14 - Testando lambdas em javascript
const eBoolean = x => typeof(x) == "boolean"? true:false
console.log("É um valor booleano: " + eBoolean(false))