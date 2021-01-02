let money = prompt("Ваш бюджет на месяц", ''),
    time = prompt('Внесите дату в формате YYYY-MM-DD', '');

let appData  = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("ВВедите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во скллько обойдется?", ''),
    a3 = prompt("ВВедите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во скллько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);
