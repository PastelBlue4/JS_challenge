const clock = document.querySelector("#clock");

function getTime(){
    const setClock = new Date();
    const horus = String(setClock.getHours()).padStart(2, "0");
    const minutes = String(setClock.getMinutes()).padStart(2, "0");
    const seconds = String(setClock.getSeconds()).padStart(2, "0");
    clock.innerText= `${horus}:${minutes}:${seconds}`;
}
getTime();
setInterval(getTime, 1000);