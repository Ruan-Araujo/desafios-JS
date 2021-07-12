// Declarar uma variável qualquer, que receba um objeto vazio.
let objetoVazio = {};
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
let pessoa = {
  nome: 'Ruan',
  sobrenome: 'Araújo',
  sexo: 'Masculino',
  idade: 22,
  altura: 1.70,
  peso: 73,
  andando: false,
  caminhouQuantosMetros: 0,
  /*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
fazerAniversario: () => {
  pessoa.idade++
  return pessoa.idade
},
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
andar: (quantidade) =>{
  let andou = pessoa['caminhouQuantosMetros'] += quantidade;
  console.log(andou);
  let saiuDoLugar = pessoa['andando'] = true;
  console.log(saiuDoLugar);
},
/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
parar: () =>{
  let parou = pessoa['andando'] = false;
  console.log(parou);
},
/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
nomeCompleto: () => console.log(`Olá! Meu nome é ${pessoa['nome']} ${pessoa['sobrenome']}`),
/* Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/ 
mostrarIdade: () => console.log(`Olá, eu tenho ${pessoa['idade']} anos`),
/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
mostrarPeso: () => console.log(`Eu peso ${pessoa['peso']} Kg`),
/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
mostrarAltura: () => console.log(`Minha altura é ${pessoa['altura']}m`),

apresentacao: () =>
  console.log(`Olá, eu sou o ${pessoa['nomeCompleto']}, tenho ${pessoa['idade']} anos, ${pessoa['altura']}, meu peso é ${pessoa['peso']} e, só hoje, eu já caminhei ${pessoa['caminhouQuantosMetros']} metros!`)

};








/* Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? */
pessoa.nomeCompleto();
/* Qual a idade da pessoa? */
pessoa.mostrarIdade();
/* Qual o peso da pessoa?  */
pessoa.mostrarPeso();
/* Qual a altura da pessoa?  */
pessoa.mostrarAltura();
 /* Faça a `pessoa` fazer 3 aniversários.
 Quantos anos a `pessoa` tem agora? */
 pessoa.fazerAniversario();
 pessoa.fazerAniversario();
 pessoa.fazerAniversario();
/* Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro. 
A pessoa ainda está andando?*/
pessoa.andar(200);
pessoa.andar(500);
pessoa.andar(300);
/* Se a pessoa ainda está andando, faça-a parar. 
E agora: a pessoa ainda está andando?*/
pessoa.parar();
/* Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!" */
pessoa.apresentacao();