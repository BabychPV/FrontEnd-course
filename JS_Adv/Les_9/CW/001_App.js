window.addEventListener("load", init, false);

function init() {

    let imgs = document.images;
    let div = document.getElementById('div1');
    let str = '';

    for (let i = 0; i < imgs.length; i++) {
        str += 'Посилання на малюнок ' + (i + 1) + '- ' + imgs[i].src + '<br/>';
        idle(imgs[i], i + 1);
    }


    function idle(obj, i) {
        setTimeout(function () {
            obj.style.border = 'solid 5px yellow';
        }, i * 1000)
    }


    div.innerHTML = str;
    div.style.color = 'white';

}

