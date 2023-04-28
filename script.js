const screen = document.querySelector('#screen');
let numsArr = [];
let nums = document.querySelectorAll('.left > div, .right > div');
let total = 0;
let num2 = 0;

const display = () => {
    screen.textContent = `${numsArr.join('')}`;
}

nums.forEach((button) => {
    button.addEventListener('click', () => {
        if(+button.innerHTML >= 0 && +button.innerHTML < 10) {
            numsArr.push(+button.innerHTML)
            display();
        }
    });
});
