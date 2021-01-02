let money = +prompt("Ваш бюджет на месяц", ''),
    time = prompt('Внесите дату в формате YYYY-MM-DD', '');

let appData  = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};



for (let i = 0; i < 2; i++) {
    let a = prompt("ВВедите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во скллько обойдется?", '');

    if ( (typeof(a)) === 'string' && (typeof(a)) != null  && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50) {
        console.log("done");

        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }

};

appData.moneyPerDay = appData.budget / 30;

alert("Daily budget:" + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("minimum level profit");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("midle level profit");
}else if (appData.moneyPerDay > 2000) {
    console.log("High level profit")
}else {
    console.log("Mistake")
}
