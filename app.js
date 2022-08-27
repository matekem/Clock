let clock = document.querySelector(".container"),
hour = document.querySelector(".hour"),
min = document.querySelector(".minute"),
sec = document.querySelector(".second"),
ms = document.querySelector(".millisecond");


setInterval(putTime, 10)

function putTime(){
    const d = new Date
    hour.innerText = d.getHours();
    min.innerText = d.getMinutes();
    sec.innerText = d.getSeconds();
    ms.innerText = d.getMilliseconds();
}
