let tg = window.Telegram.WebApp;

tg.expand();

let btn_m = document.getElementById("btn_m");
let btn_v = document.getElementById("btn_v");

btn_m.addEventListener("click", function(){
    tg.sendData("you are fed Valera");
});

btn_v.addEventListener("click", function(){
    tg.sendData("you are fed Valera");
});
