'use strict';

let money = prompt("Ваш бюджет на месяц?"); 
let date = prompt("Введите дату в формате", "YYYY-MM-DD");

console.log(money,date);

let check = prompt("Введите обязательную статью расходов в этом месяце");
let cost = prompt("Во сколько обойдется?");


// let expences = {
//     [check] : cost
// }

console.log(check,cost);


let appData = {
    money,
    date,
    expences : {
        [check] : cost
    },
    optionalExpenses : {

    },
    income : [

    ],
    savings : false
};

console.log(appData);

alert(appData.money/30);

