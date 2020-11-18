if (window.addEventListener) window.addEventListener("load", init, false);

function init() {
    let parent = $('div1');

    for (let i = 1; i < 31; i++) {
        let newImg = document.createElement('img');
        newImg.src = 'Resource/Tilda_Icons_27_Bullets/Tilda_Icons_27bu_' + i + '.svg';
        newImg.style.width = '50px';
        newImg.style.height = '50px';
        parent.appendChild(newImg);
    }

    let but = $('but');
    let counter = 1;

    parent.addEventListener('click', function (e) {
        if(e.target.offsetWidth > 50){
            e.target.style.width = '50px';
            e.target.style.height = '50px';
        }else {
            e.target.style.width = '400px';
            e.target.style.height = '400px';
        }


    })

}


function $(id) {
    return document.getElementById(id);
}