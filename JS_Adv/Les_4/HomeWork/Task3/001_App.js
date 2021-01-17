window.onload = function () {
    alert(screen.width + "  " + screen.height)
    const arr = [];
    for (let i = 0; i < 3000; i++) {
        arr[i] = document.createElement("div");
        arr[i].style.backgroundColor = getRandomColor();
        arr[i].style.height = '100px';
        arr[i].style.width = '100px';
        arr[i].style.position = 'absolute';
        document.body.appendChild(arr[i]);
    }

    setInterval(function () {
        for (let i = 0; i < arr.length; i++) {
            let l = randomInRange(0, screen.width - 100);
            let t = randomInRange(0, screen.height - 100);
            arr[i].style.left = l + 'px';
            arr[i].style.top = t + 'px';
            arr[i].style.height = randomInRange(10, 50) + 'px';
            arr[i].style.width = randomInRange(10, 60) + 'px';
            // arr[i].textContent = 'left '+l +' top ' + t;
            // arr[i].style.textAlign = 'center';

        }
    }, 100)
};


function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}