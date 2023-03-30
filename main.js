function checkDrink(drinks) {
    let milk = 'молоко', beer = 'пиво';
    let good = 'хорошо', bad = 'плохо';

    for (let drink of drinks) {
        if (drink === milk) {
            console.log(good);
        } else if (drink === beer) {
            console.log(bad);
        } else {
            console.log('Неизвестно')
        }
    }
}

function calculateAVG(nums) {
    let len = nums.length;
    let total = 0;
    for (let num of nums) {
        total += num;
    }

    console.log(total / len);
}


function mystery() {
    let question = 'У квадратного стола отпилили один угол. Сколько теперь углов у него стало?';
    let answer = prompt(question, 'пять');

    if (answer === '5' || answer === 'пять') {
        alert('Ответ верный');
    } else {
        alert('Ответ неверный');
    }
}

const duck = {
    name: 'Дональд',
    color: 'белый',
    age: 1,

    toStr: function () {
        return [this.name, this.color, this.age].join(', ');
    },

    say: function () {
        return "кря кря"
    }
}


// Task #1
const drinks = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко']
checkDrink(drinks);

// Task #2
const cases = [
    [1, 5, 12, 4, 3],
    [2, 3, 4, 5, 6, 7, 8, 9, 10],
    [3, 10, 17],
];

for (let nums of cases) {
    calculateAVG(nums);
}


// Task #3
mystery()


// Task $4
console.log(duck.toStr());
console.log(duck.say());

