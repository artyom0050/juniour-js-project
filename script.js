'use strict';

let money, time;

function start () {
        money = +prompt("Ваш бюджет на месяц", '');
        time = prompt('Внесите дату в формате YYYY-MM-DD', '');

        while (isNaN(money) || money == "" || money == null) {
            money = +prompt ("Ваш бюджет на месяц")
        }
}
start();

let appData  = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("ВВедите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во скллько обойдется?", '');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
                && a != '' && b != '' && a.length < 50) {
                console.log("done");

                appData.expenses[a] = b;
            } else {
                console.log("bad result");
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Бюджет на 1 день состовляет " + appData.moneyPerDay + "rub");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Это маленьктй уровень дохода!");
        }else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это среднтй уровень достатка!");
        }else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровунь достатка!");
        }else {
            console.log ("mistake");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("what sum of save?"),
                percent= +prompt("what percent?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход с Вашего депозита в месяца:" + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] =questionOptExpenses;
            consile.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {
        let items = prompt("Чьо принесет доп доход? (Перечислете через запятую)", '');

        if (typeof (items) != "string" || items == '' || typeof (items) == null) {
            console.log('mistake');
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('может что то еще?'));
            appData.income.sort();
        }
        appData.income.forEach(function (itemmassive, i) {
            alert("Способы допю зароботка: " + (i + 1) + " - " + itemmassive);
        });
    }
};
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}










