window.addEventListener("load", init, false);

function init() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    context.beginPath();
    context.moveTo(15, 25);
    context.lineTo(35, 15);

    context.moveTo(15, 25);
    context.lineTo(35, 35);

    context.stroke();

    // angle = angle * Math.PI / 180;
    // context.save();
    // // трансформация вращения.
    // //angle угол поворота по часовой стрелке в радианах
    // context.rotate(angle);
}