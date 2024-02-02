(function() {

    'use strict';

    /**
     * 4. A quipe encarregada de aperfeiçoar o sistema de navegação das naves da Federeção precisa que você os ajude criando uma nova funcionalidade. Essa funcionalidade consiste em calcular a elevação quadrática individual de um determinado número. Para realizar esse cálculo você deve elevar ao quadrado cada algoritmo do número em questão e concatenar os resultdados em um único número;
     * 
     * Escreva uma função que recebe um número inteiro qualquer, ele ao quadrado cada um de seus algarismos e depois concatene o resultado retornando um único número inteiro;
     * 
     * Entrada: 3514
     * Saída: 925116
     * Entrada: 24
     * Saída: 416
     * Entrada: 745821698
     * Saída: 4916256441368164
     * 
     */

        function squaredNumber(numbers) {
            let newValue = [];
            let value = '';
            newValue = numbers.toString().split('');
            newValue.forEach(function(item, index) {
                value += item * item;
            })
            return value;
        }
        console.log(squaredNumber(745821698));
        console.log(squaredNumber(3514));
        console.log(squaredNumber(24));
})();