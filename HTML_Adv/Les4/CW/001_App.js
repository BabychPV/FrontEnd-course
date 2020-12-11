window.addEventListener("load", Init);

function Init() {

    let stepH;
    let stepV;

    // получение элемента и его графического контекста.
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    context.beginPath();

    for (let i = 0; i < 2; i++) {
        let long;
        long = i === 0 ? context.canvas.height : context.canvas.width;
        stepH = 0;
        stepV = 0;
        for (let j = 0; j < 40; j++) {

            if (i === 0) {
                context.lineTo(stepH, long);
                stepH += 10;
                stepV = 0;
            } else {
                context.lineTo(long, stepV);
                stepV += 10;
                stepH = 0;
            }
            context.moveTo(stepH, stepV);
        }
    }

    context.stroke();
}
