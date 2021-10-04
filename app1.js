clock = document.querySelector('.clock');
hour = document.querySelector('.hour');
minute = document.querySelector('.minute');
second = document.querySelector('.second');

setInterval(() => {

    const date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var hr_rotate = hr * 30 + min / 2;
    var min_rotate = min * 6;
    var sec_rotate = sec * 6;



    hour.style.transformOrigin = 'center bottom';
    hour.style.transform = `rotate(${hr_rotate}deg)`;
    minute.style.transformOrigin = 'center bottom';
    minute.style.transform = `rotate(${min_rotate}deg)`;
    second.style.transformOrigin = 'center bottom';
    second.style.transform = `rotate(${sec_rotate}deg)`;
}, 1000)