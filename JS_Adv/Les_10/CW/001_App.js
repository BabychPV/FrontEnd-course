window.addEventListener("load", init, false);

function init() {

    $('but').addEventListener('click', function () {

            let xhr1 = new XMLHttpRequest();
            let xhr2 = new XMLHttpRequest();

            xhr1.open("GET", "003_ClassWork.htm", true);
            xhr2.open("GET", "004_ClassWork.htm", true);
            xhr1.onreadystatechange = function () {
                if (xhr1.readyState === 4) {
                    if (xhr1.status === 200) {
                        $('div1').innerHTML += xhr1.responseText;
                    } else {
                        $('div1').innerHTML += xhr1.status;
                    }
                }
            }
            xhr1.send();
            xhr2.onreadystatechange = function () {
                if (xhr2.readyState === 4) {
                    if (xhr2.status === 200) {
                        $('div1').innerHTML += xhr2.responseText;
                    } else {
                        $('div1').innerHTML += xhr2.status;
                    }
                }
            }
        xhr2.send();
        }
    )
    ;
}


function $(id) {
    return document.getElementById(id);
}
