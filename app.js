let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    tg.showAlert("Хорошо, ты нажал на главную кнопку.");
    tg.sendData("sendTestMessage");
});
