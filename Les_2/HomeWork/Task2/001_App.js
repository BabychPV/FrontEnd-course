let Module_001__Apps = {};
Module_001__Apps.Counter = null;

function AddP() {
    setTimeout(function () {
        Module_001__Apps.Counter++;
        if (Module_001__Apps.Counter >= 10) {
            ClearP();
        } else {
            let div1 = document.getElementById("div_1");

            let p1 = document.createElement("p")
            p1.innerHTML = "Paragraph " + Module_001__Apps.Counter;
            div1.appendChild(p1);
        }
    }, 500)

}

function ClearP() {

    Module_001__Apps.Counter = 0;
    let div1 = document.getElementById("div_1");

    while (div1.hasChildNodes()) {
        div1.removeChild(div1.firstChild);
    }
}
