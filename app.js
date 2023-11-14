var MainButton = WebApp.MainButton;
var BackButton = WebApp.BackButton;
let tg = window.Telegram.WebApp;

tg.expand();
MainButton.show();
BackButton.show();

let btn_m = document.getElementById('max_btn');
let btn_v = document.getElementById('val_btn');

btn_m.addEventListener("click", function(){
    tg.sendData("you are fed Maxim");
});

btn_v.addEventListener("click", function(){
    tg.sendData("you are fed Valera");
});
