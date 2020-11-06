window.onload = function () {
    let selector = 0 ;

    let but = document.getElementById("divB");
    let in1 = document.getElementById("input1");
    let in2 = document.getElementById("input2");
    let out = document.getElementById("output");
    but.addEventListener('click',function (e) {
        if(e.target.innerText === '+'){
            out.value = +in1.value  + +in2.value;
        }else
        {
            if(e.target.innerText  === '-'){
                out.value = +in1.value  - +in2.value;
            }else{
                if(e.target.innerText  === '/'){
                    out.value = +in1.value  / +in2.value;
                }else{
                    if(e.target.innerText  === '*'){
                        out.value = +in1.value  * +in2.value;
                    }
                }
            }
        }
    })

};



