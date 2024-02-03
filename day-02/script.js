(function() {

    'use strict';
    // nivel veryEasy

    /**
     * 2. Procedimento Recursivo I
     * 
     * recursividade é o ato de uma função chamar ela mesma várias vezes até resolver um problema
     * 
     * A equipe de manutenção da nave Highwind solicitou a sua ajuda para analisar o desempenho do computador protátil utilizado pela equipe de reconhecimento. Para isso, em um determinado momento, você precisou simular a criação de blocos de informação em formato de texto recursivamente, então decidiu criar uma função para imitar esse comportamento.
     * 
     * Escreva uma função que recebe um número e retorna uma quantidade equivalente de "chunks" separado por "-" sem utilizar nenhuma estrutura de repetição (while, , dowhile, for, etc).
     * 
     * Teste: 
     *  -Entrada(4)
     *  -Saída: "chunk-chunk-chunk-chunk"
     * 
     *  -Entrada(1)
     *  -Saída: "chunk"
     * 
     *  -Entrada(8)
     *  -Saída:"chunk-chunk-chunk-chunk-chunk-chunk-chunk-chunk"
     */

    function returnChunk(number) {
        if(number <= 0)  return '';

        return number === 1 ? "chunk" : "chunk" + "-chunk".repeat(number - 1); 
    }
    console.log(returnChunk(4));
    console.log(returnChunk(1));
    console.log(returnChunk(8));
    console.log(returnChunk(2));

})();