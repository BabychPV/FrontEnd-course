window.onload = function () {

    const arr = [];
    let sec = document.getElementsByTagName('section')[0];
    sec.style.width = '1900px';
    sec.style.height = '950px';
    sec.style.display = 'flex';
    sec.style.flexDirection = 'column';
    sec.style.justifyContent = 'space-around';


    for (let i = 0; i < 2; i++) {
        arr[i] = document.createElement("div");
        arr[i].style.backgroundColor = getRandomColor();

        if (i === 0) {
            arr[i].style.height = '70%';
        } else {
            arr[i].style.height = '30%';
        }
        arr[i].style.width = '100%';
        // arr[i].style.margin = '10px';
        sec.appendChild(arr[i]);
    }

    let brick = document.createElement("div");
    brick.style.backgroundColor = getRandomColor();
    brick.style.height = '100px';
    brick.style.width = '100px';
    brick.style.margin = '5px';
    brick.style.position = 'absolute';
    arr[0].appendChild(brick);

    let but = [];
    let pos = ['left', 'up', 'bottom', 'right'];
    let fun = [function () {
        brick.style.left = brick.offsetLeft-100 +'px'
    }, function () {
        brick.style.top = brick.offsetTop-100 +'px'
    }, function () {
        brick.style.top = brick.offsetTop+100 +'px'
    }, function () {
        brick.style.left = brick.offsetLeft+100 +'px'
    }]
    arr[1].style.display = 'flex';
    arr[1].style.flexDirection = 'row';
    arr[1].style.justifyContent = 'space-around';
    arr[1].style.alignItems = 'center';

    for (let i = 0; i < 4; i++) {
        but = document.createElement("button");
        but.style.backgroundColor = getRandomColor();
        but.textContent = pos [i];
        but.style.height = '100px';
        but.style.width = '100px';
        but.onclick = fun[i];

        arr[1].appendChild(but);
    }

}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}