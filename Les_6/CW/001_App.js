window.onload = function () {

    const arr = [];
    let sec = document.getElementsByTagName('section')[0];
    sec.style.width = '1900px';
    sec.style.height = '950px';
    sec.style.display = 'flex';
    sec.style.flexDirection = 'column';
    sec.style.justifyContent = 'space-around';


    for (let i = 0; i < 1; i++) {
        arr[i] = document.createElement("div");
        arr[i].style.backgroundColor = getRandomColor();


        arr[i].style.height = '100%';
        arr[i].style.width = '100%';
        // arr[i].style.margin = '10px';
        sec.appendChild(arr[i]);
    }

    let brick = document.createElement("div");
    brick.style.backgroundColor = getRandomColor();
    brick.style.height = '25px';
    brick.style.width = '25px';
    brick.style.margin = '5px';
    brick.style.position = 'absolute';
    arr[0].appendChild(brick);

    let but = [];
    let pos = ['left', 'up', 'bottom', 'right'];
    // let fun = [function () {
    //     brick.style.left = brick.offsetLeft - 10 + 'px'
    // }, function () {
    //     brick.style.top = brick.offsetTop - 10 + 'px'
    // }, function () {
    //     brick.style.top = brick.offsetTop + 10 + 'px'
    // }, function () {
    //     brick.style.left = brick.offsetLeft + 10 + 'px'
    // }];

    // arr[1].style.display = 'flex';
    // arr[1].style.flexDirection = 'row';
    // arr[1].style.justifyContent = 'space-around';
    // arr[1].style.alignItems = 'center';

    // for (let i = 0; i < 4; i++) {
    //     but = document.createElement("button");
    //     but.style.backgroundColor = getRandomColor();
    //     but.textContent = pos [i];
    //     but.style.height = '25px';
    //     but.style.width = '25px';
    //     // but.addEventListener('click',fun[i]);
    //
    //     arr[1].appendChild(but);
    // }

    document.body.onkeydown = function (e) {
        switch (e.keyCode) {
            case 37:
                brick.style.left = brick.offsetLeft - 10 + 'px'
                break;
            case 38:
                brick.style.top = brick.offsetTop - 10 + 'px'
                break;
           case 39:
               brick.style.left = brick.offsetLeft + 10 + 'px'
                break;
            case 40:
                brick.style.top = brick.offsetTop + 10 + 'px'
                break;
        }
    }
    // arr[1].addEventListener('click',function (e) {
    //     if(e.target.innerText === 'left'){
    //         brick.style.left = brick.offsetLeft - 10 + 'px'
    //     }else
    //     {
    //         if(e.target.innerText  === 'up'){
    //             brick.style.top = brick.offsetTop - 10 + 'px'
    //         }else{
    //             if(e.target.innerText  === 'bottom'){
    //                 brick.style.top = brick.offsetTop + 10 + 'px'
    //             }else{
    //                 if(e.target.innerText  === 'right'){
    //                     brick.style.left = brick.offsetLeft + 10 + 'px'
    //                 }
    //             }
    //         }
    //     }
    // })

};


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}