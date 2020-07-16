const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const min = date.getMinutes();
    const hour = date.getHours();
    const sec = date.getSeconds();
    clockTitle.innerText = `${hour > 9 ? `${hour}` : `0${hour}`}:${min > 9 ? `${min}`:`0${min}`}:${sec > 9 ? `${sec}` : `0${sec}`}`;
}

function init(){
    setInterval(getTime, 1000);    
}

init();
