if (window.addEventListener) window.addEventListener("load", init, false);


interface Mod {
    TotalPrice: number;
    TotalPriceId: HTMLElement;
}

let Module_07: Mod = {
    TotalPrice: 0,
    TotalPriceId: null
};


function init() {

    const form: HTMLFormElement = document.querySelector('#buy');

    let formValidation = false;
    let len;
    try {
        len = form.elements.length
    } catch (e) {
        console.log(e)
    }
    for (let j = 0; j < len; j++) {
        let e = <HTMLInputElement>form.elements[j];

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


    form.onsubmit = validateForm;
    Module_07.TotalPriceId = document.getElementById('SumPrice');
    Module_07.TotalPrice = 25;
    (<HTMLDataElement>Module_07.TotalPriceId).value = String(Module_07.TotalPrice);
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

function validateForm(handler: any) {

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

function CalcPrice(e: any) {

    if (this.value === "s1") {
        Module_07.TotalPrice = 10;
        ActualPrice();
    } else if (this.value === "s2") {
        Module_07.TotalPrice = 25;
        ActualPrice();
    } else if (this.value === "s3") {
        Module_07.TotalPrice = 300;
        ActualPrice();
    } else if (this.value === "I1") {
        if (this.checked == false) {
            Module_07.TotalPrice -= 5;
        } else {
            Module_07.TotalPrice += 5;
        }
    } else if (this.value === "I2") {
        if (this.checked == false) {
            Module_07.TotalPrice -= 6;
        } else {
            Module_07.TotalPrice += 6;
        }
    } else if (this.value === "I3") {
        if (this.checked == false) {
            Module_07.TotalPrice -= 10;
        } else {
            Module_07.TotalPrice += 10;
        }
    } else if (this.value === "I4") {
        if (this.checked == false) {
            Module_07.TotalPrice -= 5;
        } else {
            Module_07.TotalPrice += 5;
        }
    } else if (this.value === "I5") {
        if (this.checked == false) {
            Module_07.TotalPrice -= 10;
        } else {
            Module_07.TotalPrice += 10;
        }
    }

    (<HTMLDataElement>Module_07.TotalPriceId).value = String(Module_07.TotalPrice);

}

function ActualPrice() {

    let dop = document.getElementsByName("dop");

    for (let i = 0; i < dop.length; i++) {


        if ((<HTMLDataElement>dop[i]).value === "I1") {
            if ((<HTMLInputElement>dop[i]).checked == true) {
                Module_07.TotalPrice += 5;
            }
        } else if ((<HTMLDataElement>dop[i]).value === "I2") {
            if ((<HTMLInputElement>dop[i]).checked == true) {
                Module_07.TotalPrice += 6;
            }
        } else if ((<HTMLDataElement>dop[i]).value === "I3") {
            if ((<HTMLInputElement>dop[i]).checked == true) {
                Module_07.TotalPrice += 10;
            }
        } else if ((<HTMLDataElement>dop[i]).value === "I4") {
            if ((<HTMLInputElement>dop[i]).checked == true) {
                Module_07.TotalPrice += 5;
            }
        } else if ((<HTMLDataElement>dop[i]).value === "I5") {
            if ((<HTMLInputElement>dop[i]).checked == true) {
                Module_07.TotalPrice += 10;
            }
        }

    }

}