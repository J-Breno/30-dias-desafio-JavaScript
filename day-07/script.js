(function () {
  "use strict";
  // Easy
  /**
   * 7. Organizando resultados
   *  O sistema interno da nave realiza periodicamente uma verificação de seus principais componentes para chegar sua integridade. Os vários resultados dessa verificação são emitidos em formato de lista de referência numéricas desorganizadas. Para otimizar isso você deve criar um procedimento que seja capaz de organizar todas as listas de números em uma única lista ordenada.
   *
   * Escreva uma função que recebe um array bidimensional de inteiros e retorna um único array contendo todos os números em ordem ascendentes
   *
   * - Entrada: ([[1, 2, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103]])
   * - Saída: [1, 1, 3, 5, 6, 11, 19, 42, 47, 93, 103, 128]
   * - Entrada: ([[1, 3], [4, 8], [7, 5], [2, 6]])
   * - Saída: [1, 2, 3, 4, 5, 6, 7, 8]
   * - Entrada: ([[],[],[]])
   * - Saída: []
   * - Entrada: ([[100, 50], [60, 100], [20, 100, 70], [10, 40, 80, 90]])
   * - Saída: [10, 20, 40, 50, 60, 70, 80, 90, 100, 100, 100]
   */

  function flatAndSort(arr) {
    const numbers = [];
    arr.forEach(list => numbers.push(...list)) // o foreach vai separar os pequenos array, e depois quando faz a destruturação ele faz com que ele saia daqueles arrays
    return numbers.sort((a, b) => a - b) // a - b = 0? iguais; a - b === positivo? a > b; a - b === negativo? b > a;
  }
  console.log(flatAndSort([[1, 3],[4, 8],[7, 5],[2, 6],]));
  console.log(flatAndSort([[100, 50], [60, 100], [20, 100, 70], [10, 40, 80, 90]]))
  console.log(flatAndSort([[],[],[]]));
  console.log(flatAndSort([[1, 2, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103]]));
})();
