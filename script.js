const screen = document.querySelector('#screen');
let nums = document.querySelectorAll('.left > div, .right > div');
let numsArr = [];
let total = 0;
let operator = "";

const display = (num) => {
    screen.textContent = `${num}`;
}

const calculate = (num, operator) => {
    if(operator === "/" && total === 0 || num === 0) {
        return num;
    } else if(!(operator)) {
        total = num;
        return total;
    } else {

        switch(operator) {
            case "+": return total += num;
            case "-": return total -= num;
            case "*": return total *= num;
            case "/": return total /= num;
        }
    }
}

nums.forEach((button) => {
    button.addEventListener('click', () => {
        if(+button.innerHTML >= 0 && +button.innerHTML < 10) {
            numsArr.push(button.innerHTML)
            display(numsArr.join(''));
        } else if(button.innerHTML === "C") {
            operator = "";
            numsArr = [];
            total = 0;
            screen.textContent = "0";
        } else if(button.innerHTML === "=" && total > 0) {
            display(calculate(+numsArr.join(''), operator));
            operator = "";
            numsArr = [];
        } else if(!(button.innerHTML === "=")) {
            display(calculate(+numsArr.join(''), operator));
            operator = button.innerHTML;
            numsArr = [];
        }
    });
});
