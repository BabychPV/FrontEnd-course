if (window.addEventListener) window.addEventListener("load", init, false);

function init() {




    let img = $('img');
    let but = $('but');
    let counter = 1;

    but.addEventListener('click', function(e){

        ++counter > 31 ? counter=1:counter;
        img.src = 'Resource/Tilda_Icons_27_Bullets/Tilda_Icons_27bu_'+ counter + '.svg'

    })

}



function $(id) {
    return document.getElementById(id);
}