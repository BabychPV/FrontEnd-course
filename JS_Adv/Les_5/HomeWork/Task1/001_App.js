window.onload = function () {

    let but = document.getElementById("divB");
    let in1 = document.getElementById("input1");
    let in2 = document.getElementById("input2");
    let out = document.getElementById("output");


    let checkInputValue = function (e) {
        let pattern = /^[+-]?\d+[.]?\d+$/;
        let curVal = this.value;
        if (!pattern.test(curVal)) {
            this.style.backgroundColor = 'red';
            but.hidden = true;
        }else
        {
            this.style.backgroundColor = 'white';
            but.hidden = false;
        }
    };

    in1.addEventListener('change',checkInputValue);
    in2.addEventListener('change',checkInputValue);

    but.addEventListener('click', function (e) {
        if (e.target.innerText === '+') {
            out.value = CalcRun(+in1.value, +in2.value, '+');
        } else {
            if (e.target.innerText === '-') {
                out.value = CalcRun(+in1.value, +in2.value, '-');
            } else {
                if (e.target.innerText === '/') {
                    out.value = CalcRun(+in1.value, +in2.value, '/');
                } else {
                    if (e.target.innerText === '*') {
                        out.value = CalcRun(+in1.value, +in2.value, '*');
                    }
                }
            }
        }
    })

};



