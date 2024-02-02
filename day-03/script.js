(function () {
  "use strict";

  /**
   * 3. Linguagem Limitada
   *
   *  Um dispositivo portátil encontrado no planeta Anelius está sendo estudado pela equipe de pesquisadores do Instituto de Tecnologia da Federação. Ele funciona a base de uma linguagem desconhecida e limitada. Para estender suas funcionalidades, foi solicitado que você crie um procedimento que seja capaz de inverter listas de forma não destrutiva, ou seja, sem alterar a lista original, porém utilizando apenas recursos básicos de repetição(for, while, etc)
   *
   * Escreva uma função que recebe um array e retorne um novo array com todos as posições invertidas do original sem alterá-lo. Não utilize os métodos do objeto global Array Javascript (reverse, map, forEach, etc);
   *
   * Teste:
   *      Entrada: [0, 9, 6, 8, 9,1, 5, 7]
   *      Saída: [7, 5, 1, 9, 8, 6, 9, 0]
   *      Entrada: ['Oh', 'Hi', 'Mark']
   *      Saída: ['Mark', 'Hi', 'Oh']
   *      Entrada: [false, true, true,true]
   *      Saída: [true, true, true, false]
   *      Entrada: ["It's", 'not', true, 0]
   *      Saída: [0, true, 'not', "It's"]
   *
   */

  function reverseList(...arrayValues) {
  let reversedArray = [];
    for(let i = 1; i <= arrayValues.length; i++) {
         reversedArray[i - 1] = arrayValues[arrayValues.length - i];
    }
    return reversedArray;
  }

  console.log(reverseList(0, 9, 6, 8, 9,1, 5, 7));
  console.log(reverseList('Oh', 'Hi', 'Mark'));
  console.log(reverseList(false, true, true,true));
  console.log(reverseList("It's", 'not', true, 0));

})();
