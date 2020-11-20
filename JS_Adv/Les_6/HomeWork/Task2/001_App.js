window.onload = function () {

    let text = document.getElementById("text");
    // let butG = document.getElementById("g");
    // butG.className = 'green';
    // let butB = document.getElementById("b");
    // butB.className = 'blue';
    // let butR = document.getElementById("r");
    // butR.className = 'red';

document.body.addEventListener('keypress', function (e) {
    if(e.keyCode === 103){
        text.className = 'green'
    }
    else if(e.keyCode === 98){
        text.className = 'blue'
    }
    else if(e.keyCode === 114){
        text.className = 'red'
    }
});


};