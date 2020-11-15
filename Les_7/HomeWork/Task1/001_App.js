if (window.addEventListener) window.addEventListener("load", init, false);

let Module_07 = {};
Module_07.TotalPrice = 0;
Module_07.TotalPriceId = null;

function init() {

    for (let i = 0; i < document.buy.length; i++) {
        let form = document.buy[i];

        let formValidation = false;
        let len;
        try {
            len = form.elements.length
        } catch (e) {
            console.log(e)
        }
        for (let j = 0; j < len; j++) {
            let e = form.elements[j];

            if (e.type === 'checkbox' || e.name === 'Size') {
                e.addEventListener('change', CalcPrice);
            } else {
                if (e.type !== 'text') {
                    continue;
                } else {
                    let pattern = e.dataset.val;

                    if (pattern) {
                        e.addEventListener('change', validateInput);
                        formValidation = true;
                    }
                }
            }
        }
        // if (formValidation) {
        //     form.onsubmit = validateForm;
        // }
    }

    document.buy.onsubmit = validateForm;
    Module_07.TotalPriceId = document.getElementById('SumPrice');
    Module_07.TotalPrice = 380;
    Module_07.TotalPriceId.value = Module_07.TotalPrice;
}

function validateInput() {
    let pattern = this.dataset.val,
        msg = this.dataset.valMsg,
        msgId = this.dataset.valMsgId,
        value = this.value;

    let res = value.search(pattern);
    if (res == -1) {
        document.getElementById(msgId).className = "error";
    } else {
        document.getElementById(msgId).className = "valid";
    }
}

function validateForm(handler) {

    let invalid = false;

    for (let i = 0; i < this.elements.length; ++i) {
        let e = this.elements[i];
        if (e.type === "text") {
            //e.onchange();
            if (e.dataset.valMsgId)
            if (document.getElementById(e.dataset.valMsgId).className == "error") invalid = true;
        }
    }

    if (invalid) {
        handler.preventDefault();
        alert("Допущены ошибки при заполнении формы.");
        return false;
    }
}

function CalcPrice(e) {

    if (this.value === "s1") {
        Module_07.TotalPrice = 100;
        ActualPrice();
    } else if (this.value === "s2") {
        Module_07.TotalPrice = 200;
        ActualPrice();
    } else if (this.value === "s3") {
        Module_07.TotalPrice = 300;
        ActualPrice();
    } else if (this.value === "I1") {
        if (this.checked == false) {
            Module_07.TotalPrice -= 15;
        } else {
            Module_07.TotalPrice += 15;
        }
    } else if (this.value === "I2") {
        if (this.checked == false) {
            Module_07.TotalPrice -= 20;
        } else {
            Module_07.TotalPrice += 20;
        }
    } else if (this.value === "I3") {
        if (this.checked == false) {
            Module_07.TotalPrice -= 25;
        } else {
            Module_07.TotalPrice += 25;
        }
    } else if (this.value === "I4") {
        if (this.checked == false) {
            Module_07.TotalPrice -= 20;
        } else {
            Module_07.TotalPrice += 20;
        }
    } else if (this.value === "I5") {
        if (this.checked == false) {
            Module_07.TotalPrice -= 10;
        } else {
            Module_07.TotalPrice += 10;
        }
    }

    Module_07.TotalPriceId.value = Module_07.TotalPrice;

}

function ActualPrice() {

    let dop = document.getElementsByName("dop");

    for (let i = 0; i < dop.length; i++) {

        if (dop[i].value === "I1") {
            if (dop[i].checked == true) {
                Module_07.TotalPrice += 15;
            }
        } else if (dop[i].value === "I2") {
            if (dop[i].checked == true) {
                Module_07.TotalPrice += 20;
            }
        } else if (dop[i].value === "I3") {
            if (dop[i].checked == true) {
                Module_07.TotalPrice += 25;
            }
        } else if (dop[i].value === "I4") {
            if (dop[i].checked == true) {
                Module_07.TotalPrice += 20;
            }
        } else if (dop[i].value === "I5") {
            if (dop[i].checked == true) {
                Module_07.TotalPrice += 10;
            }
        }

    }

}