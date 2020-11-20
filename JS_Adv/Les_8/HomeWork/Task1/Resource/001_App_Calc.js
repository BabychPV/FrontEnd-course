// CalcRun(2, 0, '/');
// CalcRun([2, 5, 6], [3, 6, 0], '/');
// CalcRun({a: 3, b: 4}, {a: 30, b: 0}, '/');


function CalcRun(operand1, operand2, sign) {

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
            case 3:
                CalcObject(operand1, operand2, sign)
                break;
            default:
                alert('type operand not defined')

        }
    }

}


function CalcVerifyOperand(a, b) {

    if ((a instanceof Array && b instanceof Array) || (!isNaN(a) && b instanceof Array) || (!isNaN(b) && a instanceof Array)) {
        return 2
    } else if (!isNaN(a) && !isNaN(b))
        return 1
    else if (a instanceof Object && b instanceof Object)
        return 3
    else
        return 4
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
    } else {
 //       alert('div on 0');
        return NaN;
    }

}

function CheckType(val, desc) {
    if (!isNaN(val)) {
        return parseFloat(val);
    } else {
        document.write("<p><b style='color:red'>" + desc + ' is not number. Replace by 0' + "</b>");
        return 0;
    }

}

function CheckSing(sing) {
    switch (sing) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true
            break;
        default:
            return false
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
        return Math.round((result)*100)/100;
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
function CalcObject(operand1, operand2, sign) {

    const arrlenght = operand1.length >= operand2.length ? operand2.length : operand1.length;
    let outputObject = {a: null, b: null};

    switch (sign) {
        case "+":
            outputObject.a = add(CheckType(operand1.a, 'operand1.a'), CheckType(operand2.a, 'operand2.a'));
            outputObject.b = add(CheckType(operand1.b, 'operand1.a'), CheckType(operand2.b, 'operand2.a'));
            break;
        case "-":
            outputObject.a = sub(CheckType(operand1.a, 'operand1.a'), CheckType(operand2.a, 'operand2.a'));
            outputObject.b = sub(CheckType(operand1.b, 'operand1.a'), CheckType(operand2.b, 'operand2.a'));
            break;
        case "*":
            outputObject.a = mul(CheckType(operand1.a, 'operand1.a'), CheckType(operand2.a, 'operand2.a'));
            outputObject.b = mul(CheckType(operand1.b, 'operand1.a'), CheckType(operand2.b, 'operand2.a'));
            break;
        case "/":
            outputObject.a = div(CheckType(operand1.a, 'operand1.a'), CheckType(operand2.a, 'operand2.a'));
            outputObject.b = div(CheckType(operand1.b, 'operand1.a'), CheckType(operand2.b, 'operand2.a'));
            break;
    }

    for (let prop in operand1) {
        document.write("<p> operand1." + prop + ' = ' + operand1[prop] + '<\p>');
    }

    document.write("<p>" + sign + '<\p>');

    for (let prop in operand2) {
        document.write("<p> operand2." + prop + ' = ' + operand2[prop] + '<\p>');
    }

    document.write("<p> =" + '<\p>');

    for (let prop in outputObject) {
        document.write("<p> outputObject." + prop + ' = ' + outputObject[prop] + '<\p>');
    }
}

// CalcObject
// *************************************************************************