window.addEventListener("load", init, false);

function init() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    let gradient = context.createLinearGradient(50,0, 500, 0);
    // Добавление цвета и смещения позиции остановки цвета.
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.2, "red");
    gradient.addColorStop(0.2, "white");
    gradient.addColorStop(0.8, "white");
    gradient.addColorStop(0.8, "red");
    gradient.addColorStop(1, "red");
    // Установка объекта градиента в качестве цвета заливки контекста.
    context.fillStyle = gradient;

    context.beginPath();
    // первая точка
    let startingX = 50,
        startingY = 50,
        firstX = 50,
        firstY = 100,
        secondX = 300,
        secondY = 10,
        endingX = 500,
        endingY = 40;

    context.moveTo(startingX, startingY);
    context.bezierCurveTo(firstX, firstY, secondX, secondY, endingX, endingY);
    context.lineTo(500, 440);
    firstX = 300, secondX = 300,
        firstY = 450, secondY = 390,
        endingX = 50, endingY = 440;


    context.bezierCurveTo(firstX, firstY, secondX, secondY, endingX, endingY);
    context.closePath();
    context.fill();

    let logo = new Image();
    logo.onload = function () {
        context.drawImage(logo, 70, 50);
    };
    logo.src = "Resource/List.png";
    context.scale(2, 2);

}