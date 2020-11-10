window.onload = function () {

    let text = document.getElementById("text");
    let butG = document.getElementById("g");
    butG.className = 'green';
    let butB = document.getElementById("b");
    butB.className = 'blue';
    let butR = document.getElementById("r");
    butR.className = 'red';

    butB.addEventListener('click', function () {
        text.className = 'blue'
    });
    butG.addEventListener('click', function () {
        text.className = 'green'
    });
    butR.addEventListener('click', function () {
        text.className = 'red'
    });

};