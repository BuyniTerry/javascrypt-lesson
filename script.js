'use strict';

let money = prompt("Ваш бюджет на месяц?"); 
let date = prompt("Введите дату в формате", "YYYY-MM-DD");

console.log(money,date);

// let check1 = prompt("Введите обязательную статью расходов в этом месяце"),
//     cost1 = prompt("Во сколько обойдется?"),
//     check2 = prompt("Введите обязательную статью расходов в этом месяце"),
//     cost2 = prompt("Во сколько обойдется?");


// let expences = {
//     [check] : cost
// }

// console.log(check,cost);


let appData = {
    budget : money,
    timeData : date,
    expences : {
    
    },
    optionalExpenses : {

    },
    income : [

    ],
    savings : false
};

console.log(appData);

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце",""),
        b = prompt("Во сколько обойдется?","");
    
    if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expences[a]=b;
    } else {
        continue;
    }
};

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце",""),
//         b = prompt("Во сколько обойдется?","");
    
//     if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expences[a]=b;
//     } else {
//         continue;
//     }
//     i++;
// }

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце",""),
//         b = prompt("Во сколько обойдется?","");
    
//     if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expences[a]=b;
//     } else {
//         continue;
//     }
//     i++;
// } while (i<2);



appData.moneyPerDay = appData.budget / 30;


alert("Ежедневный бюджет: " + appData.moneyPerDay);
if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка");
    
}

