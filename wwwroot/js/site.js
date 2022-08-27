// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//1_ Criando Array do objeto 

let baseConvert = [
    { number: 1000, roman: 'M' },
    { number: 900, roman: 'CM' },
    { number: 500, roman: 'D' },
    { number: 400, roman: 'CD' },
    { number: 100, roman: 'C' },
    { number: 90, roman: 'XC' },
    { number: 50, roman: 'L' },
    { number: 40, roman: 'XL' },
    { number: 10, roman: 'X' },
    { number: 9, roman: 'IX' },
    { number: 5, roman: 'V' },
    { number: 4, roman: 'IV' },
    { number: 1, roman: 'I' }
];

function converting(romanNumber) {
    let letterRoman = '';
    let number = romanNumber;

    //For para percorrer todo o ARRAY, buscar e efetuar a leitura dos objetos do array atravez do length
    for (let i = 0; i < baseConvert.length; i++) {
        //Decisao de analise de cada numero que representa um valor em caracter romano. 
        if (baseConvert[i].number <= number) {
            number = number - baseConvert[i].number; //25 - 10 = 15;
            letterRoman = letterRoman + baseConvert[i].roman;
            i--;
        }

    }

    document.getElementById('romanInput').value = letterRoman;
    console.log(letterRoman);
}

document.getElementById('converting').addEventListener('click', function () {
    let number = document.getElementById('numberInput').value;

    converting(number);
});