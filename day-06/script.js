(function() {

    'use strict';
    // nivel veryEasy
    /**
     * 6. História Escondida II
     * 
     * Ainda analisando as tabuletas do planeta Ondur, dessa vez o pesquisador encontrou um padrão diferente nos escritos. Ele agora precisa que você atualize o programa para ser capaz de ler esse novo padrão. Para isso, o programa precisa ser capaz de inverter as palavras dos trechos dos escritos, porém sem alterar a ordem em que elas estão escritas.
     * 
     * Escreva uma função que recebe uma string e retorna cada palavra da string invertida e em letras minúsculas, porém com as palavras na mesma ordem. Assuma que a String não possui nehuma letra com acesso, número ou caractere especial, apenas letras e espaços
     * 
     * -Entrada: ('Lorem ipsum dolore sec avanti');
     * - Saída: 'merol muspi erolod ces itnava'
     * - Entrada: ('This is an apple')
     * - Saída: 'siht si na elppa'
     * - Entrada: ('May the force be with you')
     * - Saída: 'yam eht ecrof eb htiw uoy'
     * - Entrada: ('It s over nine thousand')
     * - Saída: 'ti s revo enin dnasuoht'
     */

    function invertWord(word) {
        return word.split('').reverse().join('');
    }

    function invert(string) {
        return string.toLowerCase().split(' ').map(invertWord).join(' ');
    }
    
    console.log(invert('Lorem ipsum dolore sec avanti'));
    console.log(invert('This is an apple'));
    console.log(invert('May the force be with you'));
    console.log(invert('It s over nine thousand'));

            //let arrayReverse = [];// lembre-se se vocÊ quiser criar um novo array, como você fez nessa linha usando o colchete, utilize o map, pois ele já retorna um array
})();