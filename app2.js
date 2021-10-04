clock = document.querySelector('.clock');
hour = document.querySelector('.hour');
minute = document.querySelector('.minute');
second = document.querySelector('.second');
btn1 = document.querySelector('.btn1');
btn2 = document.querySelector('.btn2');
btn3 = document.querySelector('.btn3');

var hr = 0;
var min = 0;
var sec = 0;

function time() {

    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
        if (min == 60) {
            min = 0;
            hr++;
            if (hr == 24) {
                hr = 0;
            }
        }
    }

    var hr_rotate = hr * 30 + min / 2;
    var min_rotate = min * 6;
    var sec_rotate = sec * 6;


    hour.style.transformOrigin = 'center bottom';
    hour.style.transform = `rotate(${hr_rotate}deg)`;
    minute.style.transformOrigin = 'center bottom';
    minute.style.transform = `rotate(${min_rotate}deg)`;
    second.style.transformOrigin = 'center bottom';
    second.style.transform = `rotate(${sec_rotate}deg)`;
}





btn1.addEventListener('click', () => {
    myTime = setInterval(time, 1000);
})

btn2.addEventListener('click', () => {
    clearInterval(myTime);
})

btn3.addEventListener('click', () => {
    clearInterval(myTime);
    hr = 0;
    min = 0;
    sec = 0;

    hour.style.transformOrigin = 'center bottom';
    hour.style.transform = `rotate0deg)`;
    minute.style.transformOrigin = 'center bottom';
    minute.style.transform = `rotate(0deg)`;
    second.style.transformOrigin = 'center bottom';
    second.style.transform = `rotate(0deg)`;
})