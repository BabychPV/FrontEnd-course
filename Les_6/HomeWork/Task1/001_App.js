window.onload = function () {

    let Module_6_001 = {};

    Module_6_001.countpress = 0;
    Module_6_001.flagchange = 0;

    let but = document.getElementById("but");
    let text = document.getElementById("text");

    text.addEventListener('change', function () {
        Module_6_001.flagchange++;
    })

    but.addEventListener('click', function () {
        Module_6_001.countpress++;
    });


    window.addEventListener('beforeunload', function (e) {
        if (Module_6_001.countpress === 0 && Module_6_001.flagchange === 0) {
            return null;
        } else {
            e.preventDefault();
            e.returnValue = 'Ви не зберегли дані!';
        }
    });

};



