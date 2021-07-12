// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function somar(numA, numB){
  return (numA + numB);
};
// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let somando = (somar(3, 2) + 5);
// Qual o valor atualizado dessa variável?
console.log(somando);
// Declare uma nova variável, sem valor.
let semValor;
/* Crie uma função que adicione um valor à variável criada acima, e retorne a string: O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável. */
function addValor(qualValor){
  return semValor = qualValor;
};
// Invoque a função criada acima.
addValor('VALOR');
//// Qual o retorno da função? 
console.log(semValor);

/* Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação. */

function tresArgumentos(argA, argB, argC){
  if (argA == null || argB == null || argC == null){
    console.log('Preencha todos os valores corretamente');
  }
  return (argA * argB * argC) + 2;
};
// Invoque a função criada acima, passando só dois números como argumento.
//console.log(tresArgumentos(0, 0));
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado)
//Preencha todos os valores corretamente e NAN;

/* Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
 */
console.log(tresArgumentos(0, 0, 0));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado) = 2;

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function argumentos(argI, argII, argIII){
  if (argI !== undefined && argII !== undefined && argIII !== undefined){
    return (argI + argII) / argIII;
  }else if (argI !== undefined && argII !== undefined && argIII == undefined){
    return (argI + argII);
  }else if(argI !== undefined && argII == undefined && argIII == undefined){
    return argI;
  }else if(argI == undefined && argII == undefined && argIII == undefined){
    return false;
  }else{
    return null;
  }
};

console.log(argumentos());

/* Usando arrow function */
let essesArgumentos = (arguA, arguB, arguC) => {
  if (arguA !== undefined && arguB !== undefined && arguC !== undefined){
    console.log((arguA + arguB) / arguC); 
  }else if (arguA !== undefined && arguB !== undefined && arguC == undefined){
    console.log((arguA + arguB)); 
  }else if (arguA !== undefined && arguB == undefined && arguC == undefined){
    console.log(arguA);  
  }else if (arguA == undefined && arguB == undefined && arguC == undefined){
    console.log(false); 
  }else{
    console.log(null);
  }; 
};

essesArgumentos(3, 9, 3);

