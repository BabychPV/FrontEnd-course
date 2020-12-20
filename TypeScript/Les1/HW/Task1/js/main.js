if (window.addEventListener)
    window.addEventListener("load", init, false);
let Module_07 = {
    TotalPrice: 0,
    TotalPriceId: null
};
function init() {
    const form = document.querySelector('#buy');
    let formValidation = false;
    let len;
    try {
        len = form.elements.length;
    }
    catch (e) {
        console.log(e);
    }
    for (let j = 0; j < len; j++) {
        let e = form.elements[j];
        if (e.type === 'checkbox' || e.name === 'Size') {
            e.addEventListener('change', CalcPrice);
        }
        else {
            if (e.type !== 'text') {
                continue;
            }
            else {
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
    Module_07.TotalPriceId.value = String(Module_07.TotalPrice);
}
function validateInput() {
    let pattern = this.dataset.val, msg = this.dataset.valMsg, msgId = this.dataset.valMsgId, value = this.value;
    let res = value.search(pattern);
    if (res == -1) {
        document.getElementById(msgId).className = "error";
    }
    else {
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
                if (document.getElementById(e.dataset.valMsgId).className == "error")
                    invalid = true;
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
        Module_07.TotalPrice = 10;
        ActualPrice();
    }
    else if (this.value === "s2") {
        Module_07.TotalPrice = 25;
        ActualPrice();
    }
    else if (this.value === "s3") {
        Module_07.TotalPrice = 300;
        ActualPrice();
    }
    else if (this.value === "I1") {
        if (this.checked == false) {
            Module_07.TotalPrice -= 5;
        }
        else {
            Module_07.TotalPrice += 5;
        }
    }
    else if (this.value === "I2") {
        if (this.checked == false) {
            Module_07.TotalPrice -= 6;
        }
        else {
            Module_07.TotalPrice += 6;
        }
    }
    else if (this.value === "I3") {
        if (this.checked == false) {
            Module_07.TotalPrice -= 10;
        }
        else {
            Module_07.TotalPrice += 10;
        }
    }
    else if (this.value === "I4") {
        if (this.checked == false) {
            Module_07.TotalPrice -= 5;
        }
        else {
            Module_07.TotalPrice += 5;
        }
    }
    else if (this.value === "I5") {
        if (this.checked == false) {
            Module_07.TotalPrice -= 10;
        }
        else {
            Module_07.TotalPrice += 10;
        }
    }
    Module_07.TotalPriceId.value = String(Module_07.TotalPrice);
}
function ActualPrice() {
    let dop = document.getElementsByName("dop");
    for (let i = 0; i < dop.length; i++) {
        if (dop[i].value === "I1") {
            if (dop[i].checked == true) {
                Module_07.TotalPrice += 5;
            }
        }
        else if (dop[i].value === "I2") {
            if (dop[i].checked == true) {
                Module_07.TotalPrice += 6;
            }
        }
        else if (dop[i].value === "I3") {
            if (dop[i].checked == true) {
                Module_07.TotalPrice += 10;
            }
        }
        else if (dop[i].value === "I4") {
            if (dop[i].checked == true) {
                Module_07.TotalPrice += 5;
            }
        }
        else if (dop[i].value === "I5") {
            if (dop[i].checked == true) {
                Module_07.TotalPrice += 10;
            }
        }
    }
}
// CalcRun(2, 0, '/');
// CalcRun([2, 5, 6], [3, 6, 0], '/');
// CalcRun({a: 3, b: 4}, {a: 30, b: 0}, '/');
function CalcRun(operand1 = 1, operand2 = 1, sign = '+') {
    // let operand1 = prompt("Введите первое число: ", RandomInRange(10, 25)).trim();
    // let sign = prompt("Введите знак арифметической операции: + - * /", '+').trim();
    // let operand2 = prompt("Введите второе число: ", RandomInRange(10, 25)).trim();
    if (CheckSing(sign)) {
        switch (CalcVerifyOperand(operand1, operand2)) {
            case 1:
                return CalcValue(operand1, operand2, sign);
                break;
            case 2:
                CalcArray(operand1, operand2, sign);
                break;
            // case 3:
            //     CalcObject(operand1:number, operand2:number, sign:string)
            //     break;
            default:
                alert('type operand not defined');
        }
    }
}
function CalcVerifyOperand(a, b) {
    if ((a instanceof Array && b instanceof Array) || (!isNaN(a) && b instanceof Array) || (!isNaN(b) && a instanceof Array)) {
        return 2;
    }
    else if (!isNaN(a) && !isNaN(b))
        return 1;
    else if (a instanceof Object && b instanceof Object)
        return 3;
    else
        return 4;
}
// Calc coommon operation
// *************************************************************************
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    if ((a / b) !== Infinity) {
        return a / b;
    }
    else {
        //       alert('div on 0');
        return NaN;
    }
}
function CheckType(val, desc) {
    if (!isNaN(val)) {
        return val;
    }
    else {
        alert(desc + ' is not number. Replace by 0');
        return 0;
    }
}
function CheckSing(sing) {
    switch (sing) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
            break;
        default:
            return false;
    }
}
function RandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Calc coommon operation
// *************************************************************************
// CalcValue
// *************************************************************************
function CalcValue(operand1, operand2, sign) {
    let result = null;
    switch (sign) {
        case "+":
            result = add(operand1, operand2);
            break;
        case "-":
            result = sub(operand1, operand2);
            break;
        case "*":
            result = mul(operand1, operand2);
            break;
        case "/":
            result = div(operand1, operand2);
            break;
    }
    if (!isNaN(result)) {
        //document.write("<p>" + operand1 + " " + sign + " " + operand2 + " = " + Math.floor(result));
        return Math.round((result) * 100) / 100;
    }
}
// CalcValue
// *************************************************************************
// CalcArray
// *************************************************************************
function CalcArray(operand1, operand2, sign) {
    const arrlenght = operand1.length >= operand2.length ? operand2.length : operand1.length;
    let outputarray = [];
    switch (sign) {
        case "+":
            for (let i = 0; i < arrlenght; i++) {
                outputarray[i] = add(CheckType(operand1[i], 'operand1[' + i + ']'), CheckType(operand2[i], 'operand2[' + i + ']'));
            }
            break;
        case "-":
            for (let i = 0; i < arrlenght; i++) {
                outputarray[i] = sub(CheckType(operand1[i], 'operand1[' + i + ']'), CheckType(operand2[i], 'operand2[' + i + ']'));
            }
            break;
        case "*":
            for (let i = 0; i < arrlenght; i++) {
                outputarray[i] = mul(CheckType(operand1[i], 'operand1[' + i + ']'), CheckType(operand2[i], 'operand2[' + i + ']'));
            }
            break;
        case "/":
            for (let i = 0; i < arrlenght; i++) {
                outputarray[i] = div(CheckType(operand1[i], 'operand1[' + i + ']'), CheckType(operand2[i], 'operand2[' + i + ']'));
            }
            break;
    }
    document.write("<p>[" + operand1 + "] " + sign + " [" + operand2 + "] = [" + outputarray.join(', ') + '] <\p>');
}
// CalcArray
// *************************************************************************
// CalcObject
// *************************************************************************
// function CalcObject(operand1:any, operand2:any, sign:string) {
//
//     const arrlenght = operand1.length >= operand2.length ? operand2.length : operand1.length;
//
//
//
//     let outputObject = {a, b};
//
//     switch (sign) {
//         case "+":
//             outputObject.a = add(CheckType(operand1.a, 'operand1.a'), CheckType(operand2.a, 'operand2.a'));
//             outputObject.b = add(CheckType(operand1.b, 'operand1.a'), CheckType(operand2.b, 'operand2.a'));
//             break;
//         case "-":
//             outputObject.a = sub(CheckType(operand1.a, 'operand1.a'), CheckType(operand2.a, 'operand2.a'));
//             outputObject.b = sub(CheckType(operand1.b, 'operand1.a'), CheckType(operand2.b, 'operand2.a'));
//             break;
//         case "*":
//             outputObject.a = mul(CheckType(operand1.a, 'operand1.a'), CheckType(operand2.a, 'operand2.a'));
//             outputObject.b = mul(CheckType(operand1.b, 'operand1.a'), CheckType(operand2.b, 'operand2.a'));
//             break;
//         case "/":
//             outputObject.a = div(CheckType(operand1.a, 'operand1.a'), CheckType(operand2.a, 'operand2.a'));
//             outputObject.b = div(CheckType(operand1.b, 'operand1.a'), CheckType(operand2.b, 'operand2.a'));
//             break;
//     }
//
//     for (let prop in operand1) {
//         document.write("<p> operand1." + prop + ' = ' + operand1[prop] + '<\p>');
//     }
//
//     document.write("<p>" + sign + '<\p>');
//
//     for (let prop in operand2) {
//         document.write("<p> operand2." + prop + ' = ' + operand2[prop] + '<\p>');
//     }
//
//     document.write("<p> =" + '<\p>');
//
//     for (let prop in outputObject) {
//         document.write("<p> outputObject." + prop + ' = ' + <string>outputObject[prop] + '<\p>');
//     }
// }
// CalcObject
// *************************************************************************
//# sourceMappingURL=main.js.map