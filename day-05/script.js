(function () {
  "use strict";

  /**
   * 5. História Escondida I
   * Durante uma missão de exploração do planeta Ondur a troca de reconhecimento encontrou tabuletas contento escritos de uma antiga civilização, mas ao traduzir seu conteúdo as mensagens não faziam sentido. Porém, um pesquisador que estudava os escritos percebeu haver mensagens escondidas. Como os escritos eram muitos e para poder analisar melhor ele solicitou que você criasse um programa que o ajudasse a encontrar a história escondida contada pelas tabelas. Para conseguir isso o programa precisa ser capaz de identificar a maior letra(segundo a ordem alfabética) de cada trecho dos escritos.
   *
   * Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem alfabética em minúsculo. Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços;
   *
   * - Entrada: ('Lorem ipsum dolore sec avanti')
   * - Saída: 'v'
   * - Entrada: ('Hello')
   * - Saída: 'o'
   * - Entrada: ('May the force be with you')
   * - Saída: 'y'
   * - Entrada: ('Its over nine thousand')
   * - Saída: 'v'
   */

  function maiorLetraDaFrase(string) {
    const sortedArray = string.toLowerCase().split('').sort();
    return sortedArray[sortedArray.length - 1];
  }
  console.log(maiorLetraDaFrase("Its over nine thousand"));
  console.log(maiorLetraDaFrase("May the force be with you"));
  console.log(maiorLetraDaFrase("Hello"));
  console.log(maiorLetraDaFrase("Lorem ipsum dolore sec avanti"));
})();
