let money, time;

function start() {
     money = +prompt("Ваш бюджет на месяц?"); 
     date = prompt("Введите дату в формате", "YYYY-MM-DD");

     while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
     }
}
start();



let appData = {
    budget : money,
    timeData : date,
    expences : {
    
    },
    optionalExpenses : {

    },
    income : [

    ],
    savings : true,
    chooseExpences: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце",""),
                b = prompt("Во сколько обойдется?","");
            
            if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expences[a]=b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
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
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка"); 
        } 
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
            percent =+prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let question = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = question;
        }
    },
    chooseIncome: function() {
            for(let i=1;i<2;i++) {
                let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
                if (typeof(items) === "string" && items != null && items != "" ) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может чтото еще?'));
                appData.income.sort();
                i++;
            } else {
                i--;
            }
            appData.income.forEach(function(item, i){
                alert('Способы доп. заработка: ' + ++i + " " + item)
                });
        }
        for (let key in appData) {
            console.log("Наша программа включает в себя данные: " + key)
          };
    }
};

console.log(appData);


// chooseExpences();
// detectDayBudget();
// checkSavings();
// chooseOptExpenses();








