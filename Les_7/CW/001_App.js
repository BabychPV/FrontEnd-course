if (window.addEventListener) window.addEventListener("load", init, false);


function init() {
    for (let i = 0; i < document.forms.length; i++) {
        let form = document.forms[i];

        let formValidation = false;

        for (let j = 0; j < form.elements.length; j++) {
            let e = form.elements[j];


            if (e.type != "text") {
                continue;
            }

            let pattern = e.getAttribute("data-val");

            if (pattern) {
                e.onchange = validateInput;
                formValidation = true;
            }
        }
        if (formValidation) {
            form.onsubmit = validateForm;
        }
    }

    let pas = document.getElementById("Pass");
    let in1 = document.getElementById("input41");
    let in2 = document.getElementById("input42");

    pas.addEventListener('change', function (e) {
        if (e.target.type === 'text') {
            if (in1.value != in2.value) {
                    document.getElementById(e.target.dataset.valMsgId).innerHTML = e.target.dataset.valMsg1;
                    in1.className = "error";
                in2.className = "error";
            } else {
                in2.onchange();
                in1.onchange();
            }
        }
    })


}


function validateInput() {
    let pattern = this.dataset.val,
        msg = this.dataset.valMsg,
        msgId = this.dataset.valMsgId,
        value = this.value;

    let res = value.search(pattern);
    if (res == -1) {
        document.getElementById(msgId).innerHTML = msg;
        this.className = "error";
    } else {
        document.getElementById(msgId).innerHTML = "";
        this.className = "valid";
    }
}

function validateForm() {

    let invalid = false;

    for (let i = 0; i < this.elements.length; ++i) {
        let e = this.elements[i];
        if (e.type == "text" && e.onchange != null && e.name === 'pass') {
            if (e.value != this.elements[i + 1].value || e.value.length===0 ) {
                e.onchange();
                invalid = true;
            }
        } else {
            if (e.type == "text" && e.onchange != null) {
                e.onchange();
                if (e.className == "error") invalid = true;
            }
        }
    }

    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        return false;
    }
}