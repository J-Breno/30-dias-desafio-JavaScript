(function () {
  "use strict";

  // Easy

  /**
   * 8. Biblioteca Interplanetária
   *
   * A Biblioteca Interplanetária acumula conhecimento de todas as partes da galáxia, possuindo um acervo gigantesco e muito rico; Todas aspublicações são organizadas por autor e para isso o último nome do autor é utilizado para identificação. A direção da biblioteca precisa que você crie um programa para converter o nome completo de um autor para um abreviado corretamente no formato utilizado na organização das publicações.
   *
   *  Escreva uma função que recebe uma string contendo um nome completo e retorna uma string com todos os nomes, exceto o último, abreviados e o último nome em letras maiúsculas antes da abreviações separando por vírgula.
   *
   * - Entrada: ('Isaac Larrubia Ferreira Pontes')
   * - Saída: 'PONTES, I. L. F.'
   * - Entrada: ('John Ronald Reuel Tolkien')
   * - Saída: 'TOLKIEN, J. R. R.'
   * - Entrada: ('Chirstopher James Paolini')
   * - Saída: 'PAOLINI, C.J'
   * - Entrada: ('Suzanne Marie Collins')
   * - Saída: 'COLLINS, S. M.'
   */
  function nomeReformulado(fullName) {
    fullName = fullName.toUpperCase().split(" ");
    let lastName = fullName.pop();
    fullName = fullName.toString();
    fullName = fullName.match(/(\b\w)/g).join(". ");
    return `${lastName}, ${fullName}.`;
  }

  console.log(nomeReformulado('Isaac Larrubia Ferreira Pontes'));
  console.log(nomeReformulado('John Ronald Reuel Tolkien'));
  console.log(nomeReformulado('Chirstopher James Paolini'));
  console.log(nomeReformulado('Suzanne Marie Collins'));
  console.log(nomeReformulado('João Breno Souza Melo'));

  /**
   * Outra forma de resolver
   * 
   * const names = fullName.toUpperCase().split(' ');
   * let initials = '';
   * for(let i = 0; i < name.length - 1; i++) {
   *    initials += ` ${names[i][0]}.`
   * }
   * 
   * return `${names[names.length - 1]},${initials}`
  */
})();
