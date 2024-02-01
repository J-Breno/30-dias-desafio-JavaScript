(function(win, doc) {
    
    'use strict';
    
    /*
    Desafio: Ajudando a academia
    
    A academia de Oficiais da Federação precisa da sua ajuda prara criar um programa que automatize os cálculos das médias de alunos e turmas para melhorar acompanhar os seus desempenhos. Este programa será incorporado em seu sistema principal, portanto você precisa apenas desenvolver a função que calcula a média. No entanto, a função deve ser capaz de funcionar com qualquer número de alunos ou turmas.
    
    Escreva uma função que recebe um número qualquer de números inteiros como agrupamentos e retorne a média aritimética entre eles.
    
    média aritimética = soma de todos os números, dividida pelo total de números = 5 + 10 + 6 / 3 = 7
    
    Exemplo: 
    - Entrada(10, 9, 6, 8, 9, 1, 5, 7)
    - Saída: 6.875
    
    - Entrada(2, 5, 7, 1, -2)
    - Saída: 2.6
    
    - Entrada(10, 10, 10, 10, 9)
    - Saída: 9.8
    
    - Entrada(25, 75)
    - Saída: 50
    */
    
    function calculateAverage(...numbers) {
        return  `A média é: ${numbers.reduce((accumulate, valorAtual) => accumulate + valorAtual, 0) 
            / numbers.length}`;
    }

    console.log(calculateAverage( 10, 9, 6, 8, 9, 1, 5, 7 ));
    console.log(calculateAverage(2, 5, 7, 1, -2));
    console.log(calculateAverage(10, 10, 10, 10, 9));
    console.log(calculateAverage(25, 75));

})();